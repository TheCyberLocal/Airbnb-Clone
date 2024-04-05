// backend/routes/api/index.js
const router = require("express").Router();
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use("/session", require("./session.js"));
router.use("/users", require("./users.js"));
router.use("/spots", require("./spots.js"));
router.use("/reviews", require("./reviews.js"));
router.use("/bookings", require("./bookings.js"));
router.use("/spot-images", require("./spot-images.js"));
router.use("/review-images", require("./review-images.js"));

// Add a XSRF-TOKEN cookie
router.get("/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    "XSRF-Token": csrfToken,
  });
});

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
