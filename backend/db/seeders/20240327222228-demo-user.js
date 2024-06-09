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
          email: "elon.musk@spacex.com",
          username: "elonmusk",
          firstName: "Elon",
          lastName: "Musk",
          hashedPassword: bcrypt.hashSync("Mars2024!"),
        },
        {
          email: "mark.zuckerberg@meta.com",
          username: "zuck",
          firstName: "Mark",
          lastName: "Zuckerberg",
          hashedPassword: bcrypt.hashSync("SocialKing123"),
        },
        {
          email: "bill.gates@gatesfoundation.org",
          username: "billgates",
          firstName: "Bill",
          lastName: "Gates",
          hashedPassword: bcrypt.hashSync("WindowsXP!"),
        },
        {
          email: "steve.jobs@apple.com",
          username: "stevejobs",
          firstName: "Steve",
          lastName: "Jobs",
          hashedPassword: bcrypt.hashSync("iLeader2024"),
        },
        {
          email: "warren.buffett@berkshirehathaway.com",
          username: "warrenbuffett",
          firstName: "Warren",
          lastName: "Buffett",
          hashedPassword: bcrypt.hashSync("InvestSmart!"),
        },
      ],
      { validate: true }
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
