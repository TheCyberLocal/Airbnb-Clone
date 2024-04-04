// backend/routes/api/users.js
const express = require("express");
const bcrypt = require("bcryptjs");

const { setTokenCookie } = require("../../utils/auth");
const { User } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isString()
    .isEmail()
    .withMessage("Invalid email"),
  check("username")
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 4 })
    .withMessage("Username is required"),
  check("firstName")
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 1, max: 20 })
    .withMessage("First Name is required"),
  check("lastName")
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 1, max: 20 })
    .withMessage("Last Name is required"),
  check("password")
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password is required"),
  handleValidationErrors,
];

// Sign up
router.post("/", validateSignup, async (req, res) => {
  const { email, password, username, firstName, lastName } = req.body;
  const hashedPassword = bcrypt.hashSync(password);

  const userExists = await User.findOne({
    where: {
      username: username,
    },
  });
  const emailExists = await User.findOne({
    where: {
      email: email,
    },
  });

  if (userExists || emailExists) {
    const err = new Error("User already exists");
    err.status = 500;
    err.errors = {};
    if (userExists)
      err.errors.username = "User with that username already exists";
    if (emailExists) err.errors.email = "User with that email already exists";
    throw err;
  }

  const user = await User.create({
    email,
    username,
    firstName,
    lastName,
    hashedPassword,
  });

  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser,
  });
});

module.exports = router;
