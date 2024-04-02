const router = require("express").Router();
const { Spot, SpotImage, Review, ReviewImage } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.get("/", async (req, res) => {
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
  });
  allSpots.forEach((element) => {
    // Build previewImage
    const previewImg = element.SpotImages.reduce(
      (acc, e) => (e.preview ? e.url : acc),
      ""
    );
    element.dataValues.previewImage = previewImg;
    element.dataValues.SpotImages = undefined;

    // Build avgRating
    const totalStarRating = element.Reviews.reduce(
      (acc, e) => acc + e.stars,
      0
    );
    const userReviewCount = element.Reviews.length;
    element.dataValues.avgRating = totalStarRating / userReviewCount;
    element.dataValues.Reviews = undefined;
  });

  res.json({
    Spots: allSpots,
  });
});

module.exports = router;
