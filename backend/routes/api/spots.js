const router = require("express").Router();
const {
  Spot,
  SpotImage,
  Review,
  ReviewImage,
  User,
} = require("../../db/models");
const { restoreUser, requireAuth } = require("../../utils/auth.js");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
router.use(restoreUser);

function buildPreviewAndRating(allSpots) {
  allSpots.forEach((element) => {
    // Build previewImage
    const previewImg = element.SpotImages.reduce(
      (acc, e) => (e.preview ? e.url : acc),
      null
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

// Get all spots
router.get("/", async (_req, res) => {
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
    selectedSpot.dataValues.avgStarRating = null;
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
router.post("/:spotId/reviews", validateReview, async (req, res) => {
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
});

module.exports = router;
