const { requireAuth } = require("../../utils/auth");
const { Spot, SpotImage } = require("../../db/models");

const router = require("express").Router();

router.delete("/:imageId", requireAuth, async (req, res) => {
  // Validate imageId
  const imageId = parseInt(req.params.imageId);
  if (isNaN(imageId) || imageId < 1) {
    const err = new Error("Spot Image couldn't be found");
    err.status = 404;
    throw err;
  }

  // Check Image Exists
  const imageExists = await SpotImage.findByPk(imageId);
  if (!imageExists) {
    const err = new Error("Spot Image couldn't be found");
    err.status = 404;
    throw err;
  }

  // Spot must belong to current user
  const selectedSpot = await Spot.findByPk(imageExists.spotId);
  if (selectedSpot.ownerId !== req.user.id) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }

  // Delete Image
  await imageExists.destroy();

  res.json({
    message: "Successfully deleted",
  });
});

module.exports = router;
