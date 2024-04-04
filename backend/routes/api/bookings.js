const { requireAuth } = require("../../utils/auth");
const { Booking, Spot, SpotImage } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = require("express").Router();

router.get("/current", requireAuth, async (req, res) => {
  const bookings = await Booking.findAll({
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

module.exports = router;
