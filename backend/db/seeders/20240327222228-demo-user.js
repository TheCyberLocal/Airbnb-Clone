"use strict";

const { User } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  // define your schema in options object
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await User.bulkCreate(
      [
        {
          id: 1,
          email: "alberto@user.io",
          username: "albert1",
          firstName: "Albert",
          lastName: "Einstein",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          id: 2,
          email: "freddy@user.io",
          username: "fred2",
          firstName: "Frederick",
          lastName: "Nietzsche",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          id: 3,
          email: "jbpeterson@user.io",
          username: "jordan3",
          firstName: "Jordan",
          lastName: "Peterson",
          hashedPassword: bcrypt.hashSync("password3"),
        },
      ],
      { validate: true },
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Users";
    return queryInterface.bulkDelete(options, null, {});
  },
};
