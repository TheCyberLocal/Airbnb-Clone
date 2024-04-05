const { requireAuth } = require("../../utils/auth");
const { Review, ReviewImage } = require("../../db/models");

const router = require("express").Router();

router.delete("/:imageId", requireAuth, async (req, res) => {
  // Validate imageId
  const imageId = parseInt(req.params.imageId);
  if (isNaN(imageId) || imageId < 1) {
    const err = new Error("Review Image couldn't be found");
    err.status = 404;
    throw err;
  }

  // Check Image Exists
  const imageExists = await ReviewImage.findByPk(imageId);
  if (!imageExists) {
    const err = new Error("Review Image couldn't be found");
    err.status = 404;
    throw err;
  }

  // Review must belong to current user
  const selectedReview = await Review.findByPk(imageExists.reviewId);
  if (selectedReview.userId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  await imageExists.destroy();

  res.json({
    message: "Successfully deleted",
  });
});

module.exports = router;
