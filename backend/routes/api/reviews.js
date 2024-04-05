const { requireAuth } = require("../../utils/auth");
const {
  Review,
  User,
  Spot,
  ReviewImage,
  SpotImage,
} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

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

// Add image to review
router.post("/:reviewId/images", requireAuth, async (req, res) => {
  const reviewId = parseInt(req.params.reviewId);
  if (isNaN(reviewId) || reviewId < 1) {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    throw err;
  }

  // Review must exist
  const reviewExists = await Review.findByPk(reviewId);
  if (!reviewExists) {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    throw err;
  }

  // Review must belong to User
  if (reviewExists.userId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  // Spot can't exceed 10 images
  const reviewImages = await ReviewImage.findAll({
    where: {
      reviewId,
    },
  });
  if (reviewImages.length >= 10) {
    const err = new Error(
      "Maximum number of images for this resource was reached"
    );
    err.status = 403;
    throw err;
  }

  // URL must exist
  const { url } = req.body;
  if (typeof url !== "string" || !url.length) {
    const err = new Error("Review URL is required");
    err.status = 404;
    throw err;
  }

  const newImage = await ReviewImage.create({
    reviewId,
    url,
  });

  // Clean response
  newImage.dataValues.reviewId = undefined;
  newImage.dataValues.updatedAt = undefined;
  newImage.dataValues.createdAt = undefined;

  res.json(newImage);
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

// Edit existing Review
router.put("/:reviewId", requireAuth, validateReview, async (req, res) => {
  // Review must be valid integer
  const reviewId = parseInt(req.params.reviewId);
  if (isNaN(reviewId) || reviewId < 1) {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    throw err;
  }

  // Review must exist
  const reviewExists = await Review.findByPk(reviewId);
  if (!reviewExists) {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    throw err;
  }

  // Review must belong to User
  if (reviewExists.userId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  // Update Review
  const { review, stars } = req.body;
  reviewExists.update({
    review,
    stars,
  });

  // Return Updated Review
  const updatedReview = await Review.findByPk(reviewId);
  res.json(updatedReview);
});

// Delete existing Review
router.delete("/:reviewId", requireAuth, async (req, res) => {
  // Review must be valid integer
  const reviewId = parseInt(req.params.reviewId);
  if (isNaN(reviewId) || reviewId < 1) {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    throw err;
  }

  // Review must exist
  const reviewExists = await Review.findByPk(reviewId);
  if (!reviewExists) {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    throw err;
  }

  // Review must belong to User
  if (reviewExists.userId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  // Delete Review
  await reviewExists.destroy();

  // Return Updated Review
  res.json({
    message: "Successfully deleted",
  });
});

module.exports = router;
