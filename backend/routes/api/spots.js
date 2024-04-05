const router = require("express").Router();
const {
  Spot,
  SpotImage,
  Review,
  ReviewImage,
  Booking,
  User,
} = require("../../db/models");
const { restoreUser, requireAuth } = require("../../utils/auth.js");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Op } = require("sequelize");
router.use(restoreUser);

function buildPreviewAndRating(allSpots) {
  allSpots.forEach((element) => {
    // Build previewImage
    const previewImg = element.SpotImages.reduce(
      (acc, e) => (e.preview ? e.url : acc),
      "no preview"
    );
    element.dataValues.previewImage = previewImg;
    element.dataValues.SpotImages = undefined;

    // Build avgRating
    const totalStarRating = element.Reviews.reduce(
      (acc, e) => acc + e.stars,
      0
    );
    const userReviewCount = element.Reviews.length;
    element.dataValues.Reviews = undefined;
    if (userReviewCount) {
      element.dataValues.avgRating = totalStarRating / userReviewCount;
    } else {
      element.dataValues.avgRating = "no reviews"
    }
  });
  return allSpots;
}

// Get all spots
router.get("/", async (req, res) => {
  let {
    page = 1,
    size = 20,
    minLat,
    maxLat,
    minLng,
    maxLng,
    minPrice,
    maxPrice,
  } = req.query;

  console.log(minPrice, maxPrice);

  // Validate query params
  const err = new Error("Bad Request");
  err.status = 400;
  err.errors = {};
  if ((page !== undefined && isNaN(parseInt(page))) || page < 1 || page > 10)
    err.errors.page = "Page must be greater than or equal to 1";
  if ((size !== undefined && isNaN(parseInt(size))) || size < 1 || size > 20)
    err.errors.size = "Size must be greater than or equal to 1";
  if (
    (minLat !== undefined && isNaN(parseInt(minLat))) ||
    minLat < -90 ||
    minLat > 90
  )
    err.errors.minLat = "Minimum latitude is invalid";
  if (
    (maxLat !== undefined && isNaN(parseInt(maxLat))) ||
    maxLat < -90 ||
    maxLat > 90
  )
    err.errors.maxLat = "Maximum latitude is invalid";
  if (
    (minLng !== undefined && isNaN(parseInt(minLng))) ||
    minLng < -180 ||
    minLng > 180
  )
    err.errors.minLng = "Minimum longitude is invalid";
  if (
    (maxLng !== undefined && isNaN(parseInt(maxLng))) ||
    maxLng < -180 ||
    maxLng > 180
  )
    err.errors.maxLng = "Maximum longitude is invalid";
  if ((minPrice !== undefined && isNaN(parseInt(minPrice))) || minPrice < 0)
    err.errors.minPrice = "Minimum price must be greater than or equal to 0";
  if ((maxPrice !== undefined && isNaN(parseInt(maxPrice))) || maxPrice < 0)
    err.errors.maxPrice = "Maximum price must be greater than or equal to 0";
  if (Object.keys(err.errors).length) throw err;

  if (page !== undefined) page = parseInt(page);
  if (size !== undefined) size = parseInt(size);
  if (minLat !== undefined) minLat = parseFloat(minLat);
  if (maxLat !== undefined) maxLat = parseFloat(maxLat);
  if (minLng !== undefined) minLng = parseFloat(minLng);
  if (maxLng !== undefined) maxLng = parseFloat(maxLng);
  if (minPrice !== undefined) minPrice = parseFloat(minPrice);
  if (maxPrice !== undefined) maxPrice = parseFloat(maxPrice);

  // Construct Query
  const where = {};
  if (minLat !== undefined && maxLat !== undefined) {
    where.lat = { [Op.between]: [minLat, maxLat] };
  } else if (minLat !== undefined) {
    where.lat = { [Op.gte]: minLat };
  } else if (maxLat !== undefined) {
    where.lat = { [Op.lte]: maxLat };
  }

  if (minLng !== undefined && maxLng !== undefined) {
    where.lng = { [Op.between]: [minLng, maxLng] };
  } else if (minLng !== undefined) {
    where.lng = { [Op.gte]: minLng };
  } else if (maxLng !== undefined) {
    where.lng = { [Op.lte]: maxLng };
  }

  if (minPrice !== undefined && maxPrice !== undefined) {
    where.price = { [Op.between]: [minPrice, maxPrice] };
  } else if (minPrice !== undefined) {
    where.price = { [Op.gte]: minPrice };
  } else if (maxPrice !== undefined) {
    where.price = { [Op.lte]: maxPrice };
  }

  const allSpots = await Spot.findAll({
    include: [
      {
        model: Review,
        include: {
          model: ReviewImage,
          attributes: ["reviewId"],
        },
      },
      {
        model: SpotImage,
        attributes: ["url", "preview"],
      },
    ],
    where,
    limit: size,
    offset: size * (page - 1),
  });
  const selectedSpots = buildPreviewAndRating(allSpots);

  res.json({
    Spots: selectedSpots,
    page,
    size,
  });
});

// Get spots own by current user
router.get("/current", requireAuth, async (req, res) => {
  const ownedSpots = await Spot.findAll({
    where: {
      ownerId: req.user.id,
    },
    include: [
      {
        model: Review,
        include: {
          model: ReviewImage,
          attributes: ["reviewId"],
        },
      },
      {
        model: SpotImage,
        attributes: ["url", "preview"],
      },
    ],
  });
  const selectedSpots = buildPreviewAndRating(ownedSpots);

  res.json({
    Spots: selectedSpots,
  });
});

// Get spot details by id
router.get("/:spotId", async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  if (isNaN(spotId) || spotId < 1) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }

  const selectedSpot = await Spot.findByPk(spotId, {
    include: [
      {
        model: Review,
        include: {
          model: ReviewImage,
          attributes: ["reviewId"],
        },
      },
      {
        model: SpotImage,
        attributes: ["id", "url", "preview"],
      },
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
    ],
  });

  if (!selectedSpot) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }

  // Build avgRating
  const totalStarRating = selectedSpot.Reviews.reduce(
    (acc, e) => acc + e.stars,
    0
  );
  const userReviewCount = selectedSpot.Reviews.length;
  selectedSpot.dataValues.Reviews = undefined;
  selectedSpot.dataValues.numReviews = userReviewCount;
  if (userReviewCount) {
    selectedSpot.dataValues.avgStarRating = totalStarRating / userReviewCount;
  } else {
    selectedSpot.dataValues.avgStarRating = "no reviews";
  }

  // Rename User to Owner
  selectedSpot.dataValues.Owner = selectedSpot.User;
  selectedSpot.dataValues.User = undefined;

  res.json(selectedSpot);
});

// Create a spot
router.post("/", requireAuth, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } =
    req.body;

  const err = new Error("Bad Request");
  err.errors = {};
  err.status = 400;
  if (typeof address !== "string" || address.length === 0) {
    err.errors.address = "Street address is required";
  }
  if (typeof city !== "string" || city.length === 0) {
    err.errors.city = "City is required";
  }
  if (typeof state !== "string" || state.length === 0) {
    err.errors.state = "State is required";
  }
  if (typeof country !== "string" || country.length === 0) {
    err.errors.country = "Country is required";
  }
  if (typeof lat !== "number" || lat > 90 || lat < -90) {
    err.errors.lat = "Latitude must be within -90 and 90";
  }
  if (typeof lng !== "number" || lng > 180 || lng < -180) {
    err.errors.lng = "Longitude must be within -180 and 180";
  }
  if (typeof name !== "string" || name.length > 50) {
    err.errors.name = "Name must be less than 50 characters";
  }
  if (typeof description !== "string" || description.length === 0) {
    err.errors.description = "Description is required";
  }
  if (typeof price !== "number" || price < 0) {
    err.errors.price = "Price per day must be a positive number";
  }
  if (Object.keys(err.errors).length) throw err;

  const newSpot = await Spot.create({
    ownerId: req.user.id,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
  });
  res.status(201).json(newSpot);
});

// Add an image to spot of spotId
router.post("/:spotId/images", requireAuth, async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  if (isNaN(spotId) || spotId < 1) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }
  const selectedSpot = await Spot.findByPk(spotId);
  if (!selectedSpot) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }
  if (selectedSpot.ownerId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  const { url, preview } = req.body;
  const createdSpot = await SpotImage.create({
    spotId,
    url,
    preview,
  });

  // Clear timestamps for response
  createdSpot.dataValues.updatedAt = undefined;
  createdSpot.dataValues.createdAt = undefined;

  res.json(createdSpot);
});

// Edit a spot of current user
router.put("/:spotId", requireAuth, async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  if (isNaN(spotId) || spotId < 1) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }
  const selectedSpot = await Spot.findByPk(spotId);
  if (!selectedSpot) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }
  if (selectedSpot.ownerId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  const payload = ({
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
  } = req.body);

  const err = new Error("Bad Request");
  err.errors = {};
  err.status = 400;
  if (typeof address !== "string" || address.length === 0) {
    err.errors.address = "Street address is required";
  }
  if (typeof city !== "string" || city.length === 0) {
    err.errors.city = "City is required";
  }
  if (typeof state !== "string" || state.length === 0) {
    err.errors.state = "State is required";
  }
  if (typeof country !== "string" || country.length === 0) {
    err.errors.country = "Country is required";
  }
  if (typeof lat !== "number" || lat > 90 || lat < -90) {
    err.errors.lat = "Latitude must be within -90 and 90";
  }
  if (typeof lng !== "number" || lng > 180 || lng < -180) {
    err.errors.lng = "Longitude must be within -180 and 180";
  }
  if (typeof name !== "string" || name.length > 50) {
    err.errors.name = "Name must be less than 50 characters";
  }
  if (typeof description !== "string" || description.length === 0) {
    err.errors.description = "Description is required";
  }
  if (typeof price !== "number" || price < 0) {
    err.errors.price = "Price per day must be a positive number";
  }
  if (Object.keys(err.errors).length) throw err;

  await Spot.update(payload, {
    where: {
      id: spotId,
    },
  });

  const updatedSpot = await Spot.findByPk(spotId);
  res.json(updatedSpot);
});

// Delete a spot
router.delete("/:spotId", requireAuth, async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  if (isNaN(spotId) || spotId < 1) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }
  const selectedSpot = await Spot.findByPk(spotId);
  if (!selectedSpot) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }
  if (selectedSpot.ownerId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  await selectedSpot.destroy();

  res.json({
    message: "Successfully deleted",
  });
});

// Get all Reviews by Spot id
router.get("/:spotId/reviews", async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  if (isNaN(spotId) || spotId < 1) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }
  const selectedSpot = await Spot.findByPk(spotId);
  if (!selectedSpot) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }

  const allReviews = await Review.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: ReviewImage,
        attributes: ["id", "url"],
      },
    ],
    where: {
      spotId: req.params.spotId,
    },
  });

  res.json({
    Reviews: allReviews,
  });
});

const validateReview = [
  check("review")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Review text is required"),
  check("stars")
    .isInt({ min: 1, max: 5 })
    .withMessage("Stars must be an integer from 1 to 5"),
  handleValidationErrors,
];

// Create a Review for a Spot
router.post(
  "/:spotId/reviews",
  requireAuth,
  validateReview,
  async (req, res) => {
    const spotId = parseInt(req.params.spotId);
    if (isNaN(spotId) || spotId < 1) {
      const err = new Error("Spot couldn't be found");
      err.status = 404;
      throw err;
    }
    const selectedSpot = await Spot.findByPk(spotId);
    if (!selectedSpot) {
      const err = new Error("Spot couldn't be found");
      err.status = 404;
      throw err;
    }

    // May only submit one review
    const alreadyReviewed = await Review.findOne({
      where: {
        spotId,
        userId: req.user.id,
      },
    });
    if (!!alreadyReviewed) {
      const err = new Error("User already has a review for this spot");
      err.status = 500;
      throw err;
    }

    let { review, stars } = req.body;
    stars = parseInt(stars);

    const newReview = await Review.create({
      userId: req.user.id,
      spotId,
      review,
      stars,
    });

    res.status(201).json(newReview);
  }
);

router.get("/:spotId/bookings", requireAuth, async (req, res) => {
  // Validate spotId
  const spotId = parseInt(req.params.spotId);
  if (isNaN(spotId) || spotId < 1) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }

  // Check Spot Exists
  const spotExists = await Spot.findByPk(spotId);
  if (!spotExists) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }

  // Construct Full Access Response
  const bookings = await Booking.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
    ],
    where: {
      spotId,
    },
  });

  // Filter Restricted Information
  for (let booking of bookings) {
    if (booking.userId !== req.user.id) {
      booking.dataValues.User = undefined;
      booking.dataValues.id = undefined;
      booking.dataValues.userId = undefined;
      booking.dataValues.createdAt = undefined;
      booking.dataValues.updatedAt = undefined;
    }
  }

  res.json({
    Bookings: bookings,
  });
});

// Create a Booking
router.post("/:spotId/bookings", requireAuth, async (req, res) => {
  // Validate spotId
  const spotId = parseInt(req.params.spotId);
  if (isNaN(spotId) || spotId < 1) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }

  // Check Spot Exists
  const spotExists = await Spot.findByPk(spotId);
  if (!spotExists) {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    throw err;
  }

  // User must NOT be owner
  if (spotExists.ownerId === req.user.id) {
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
      spotId,
    },
  });

  // Convert input to Date only
  const formattedStartDate = new Date(startDate).toISOString().split("T")[0];
  const formattedEndDate = new Date(endDate).toISOString().split("T")[0];

  // Check for Booking Conflicts
  err.message = "Sorry, this spot is already booked for the specified dates";
  err.status = 403;
  for (let booking of bookings) {
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
  const newBooking = await Booking.create({
    spotId,
    userId: req.user.id,
    startDate: formattedStartDate,
    endDate: formattedEndDate,
  });

  res.json(newBooking);
});

module.exports = router;
