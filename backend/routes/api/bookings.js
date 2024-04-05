const { requireAuth } = require("../../utils/auth");
const { Booking, Spot, SpotImage } = require("../../db/models");

const router = require("express").Router();

router.get("/current", requireAuth, async (req, res) => {
  const bookings = await Booking.findAll({
    where: {
      userId: req.user.id,
    },
    include: [
      {
        model: Spot,
        attributes: {
          exclude: ["createdAt", "updatedAt", "description"],
        },
        include: [
          {
            model: SpotImage,
            attributes: ["preview", "url"],
          },
        ],
      },
    ],
  });

  // Compile Preview
  for (let booking of bookings) {
    const firstPreviewUrl = booking.Spot.SpotImages.filter(
      (val) => val.preview === true
    )[0]?.url;
    booking.Spot.dataValues.previewImage = firstPreviewUrl ?? null;
    booking.Spot.dataValues.SpotImages = undefined;
  }

  res.json({
    Bookings: bookings,
  });
});

router.put("/:bookingId", requireAuth, async (req, res) => {
  // Validate bookingId
  const bookingId = parseInt(req.params.bookingId);
  if (isNaN(bookingId) || bookingId < 1) {
    const err = new Error("Booking couldn't be found");
    err.status = 404;
    throw err;
  }

  // Check Booking Exists
  const bookingExists = await Booking.findByPk(bookingId);
  if (!bookingExists) {
    const err = new Error("Booking couldn't be found");
    err.status = 404;
    throw err;
  }

  // Can't edit a booking that's past the end date
  if (new Date(bookingExists.endDate) < new Date()) {
    const err = new Error("Past bookings can't be modified");
    err.status = 403;
    throw err;
  }

  // Booking must belong to the current user
  if (bookingExists.userId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  // Validate input
  let { startDate, endDate } = req.body;
  startDate = Date.parse(startDate);
  endDate = Date.parse(endDate);
  const err = new Error("Bad Request");
  err.errors = {};
  err.status = 400;
  if (isNaN(startDate))
    err.errors.startDate = "startDate cannot be in the past";
  if (isNaN(endDate))
    err.errors.endDate = "endDate cannot be on or before startDate";
  if (Object.keys(err.errors).length) throw err;

  // startDate cannot be in the past
  // endDate cannot be on or before startDate
  if (startDate < new Date())
    err.errors.startDate = "startDate cannot be in the past";
  if (endDate <= startDate)
    err.errors.endDate = "endDate cannot be on or before startDate";
  if (Object.keys(err.errors).length) throw err;

  const bookings = await Booking.findAll({
    where: {
      spotId: bookingExists.spotId,
    },
  });

  // Convert input to Date only
  const formattedStartDate = new Date(startDate).toISOString().split("T")[0];
  const formattedEndDate = new Date(endDate).toISOString().split("T")[0];

  // Check for Booking Conflicts
  err.message = "Sorry, this spot is already booked for the specified dates";
  err.status = 403;
  for (let booking of bookings) {
    // Don't check for conflict with the booking allocation being modified
    if (booking.id === bookingId) continue;
    // If new booking startDate is within an existing booking allocation
    if (
      formattedStartDate >= booking.startDate &&
      formattedStartDate <= booking.endDate
    ) {
      err.errors.startDate = "Start date conflicts with an existing booking";
    }
    // If new booking endDate is within an existing booking allocation
    if (
      formattedEndDate >= booking.startDate &&
      formattedEndDate <= booking.endDate
    ) {
      err.errors.endDate = "End date conflicts with an existing booking";
    }
    // Don't add overlap error if either start or end date conflict
    if (err.errors.startDate || err.errors.endDate) continue;
    // If new booking allocation is within an existing booking allocation
    // If new booking start and end are both before existing start or
    // If new booking start and end are both after existing end skip error
    if (
      (formattedStartDate < booking.startDate &&
        formattedEndDate < booking.startDate) ||
      (formattedStartDate > booking.endDate &&
        formattedEndDate > booking.endDate)
    )
      continue;
    // ! Using start and end date conflict for App Academy specs
    err.errors.startDate = "Start date conflicts with an existing booking";
    err.errors.endDate = "End date conflicts with an existing booking";
    // ! Alternatively would use overlap error
    // err.errors.overlap = "New booking overlaps an existing booking";
  }
  if (Object.keys(err.errors).length) throw err;

  // Create Booking
  await Booking.update(
    {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    },
    {
      where: {
        id: bookingId,
      },
    }
  );

  const newBooking = await Booking.findByPk(bookingId);
  res.json(newBooking);
});

router.delete("/:bookingId", requireAuth, async (req, res) => {
  // Validate bookingId
  const bookingId = parseInt(req.params.bookingId);
  if (isNaN(bookingId) || bookingId < 1) {
    const err = new Error("Booking couldn't be found");
    err.status = 404;
    throw err;
  }

  // Check Booking Exists
  const bookingExists = await Booking.findByPk(bookingId);
  if (!bookingExists) {
    const err = new Error("Booking couldn't be found");
    err.status = 404;
    throw err;
  }

  // Can't delete a started booking
  if (new Date(bookingExists.startDate) < new Date()) {
    const err = new Error("Bookings that have been started can't be deleted");
    err.status = 403;
    throw err;
  }

  // Booking must belong to the current user
  if (bookingExists.userId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  // Delete booking
  await bookingExists.destroy();

  res.json({
    message: "Successfully deleted",
  });
});

module.exports = router;
