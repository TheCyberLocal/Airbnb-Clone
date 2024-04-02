const router = require("express").Router();
const {
  Spot,
  SpotImage,
  Review,
  ReviewImage,
  User,
} = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { check } = require("express-validator");
router.use(restoreUser);

const { handleValidationErrors } = require("../../utils/validation");

function buildPreviewAndRating(allSpots) {
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
  return allSpots;
}

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
  const selectedSpots = buildPreviewAndRating(allSpots);

  res.json({
    Spots: selectedSpots,
  });
});

router.get("/current", async (req, res) => {
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

router.get("/:spotId", async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  if (isNaN(spotId) || spotId < 1) return;

  const selectedSpots = await Spot.findByPk(spotId, {
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

  if (!selectedSpots)
    return res.status(404).json({
      message: "Spot couldn't be found",
    });

  // Build avgRating
  const totalStarRating = selectedSpots.Reviews.reduce(
    (acc, e) => acc + e.stars,
    0
  );
  const userReviewCount = selectedSpots.Reviews.length;
  selectedSpots.dataValues.numReviews = userReviewCount;
  selectedSpots.dataValues.avgStarRating = totalStarRating / userReviewCount;
  selectedSpots.dataValues.Reviews = undefined;

  // Rename User to Owner
  selectedSpots.dataValues.Owner = selectedSpots.User;
  selectedSpots.dataValues.User = undefined;

  res.json(selectedSpots);
});

router.post("/", async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } =
  req.body;
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

module.exports = router;
