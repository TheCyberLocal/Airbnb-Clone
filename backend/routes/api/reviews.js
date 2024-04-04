// backend/routes/api/session.js

const { requireAuth } = require("../../utils/auth");
const {
  Review,
  User,
  Spot,
  ReviewImage,
  SpotImage,
} = require("../../db/models");

const router = require("express").Router();

router.get("/current", requireAuth, async (req, res, next) => {
  const allReviews = await Review.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Spot,
        include: [
          {
            model: SpotImage,
            attributes: ["url", "preview"],
          },
        ],
      },
      {
        model: ReviewImage,
        attributes: ["id", "url"],
      },
    ],
    where: {
      userId: req.user.id,
    },
  });

  // Compile Preview
  for (let review of allReviews) {
    const firstPreviewUrl = review.Spot.SpotImages.filter(
      (val) => val.preview === true
    )[0]?.url;
    review.Spot.dataValues.previewImage = firstPreviewUrl ?? null;
    review.Spot.dataValues.SpotImages = undefined;
  }

  res.json({
    Reviews: allReviews,
  });
});

module.exports = router;
