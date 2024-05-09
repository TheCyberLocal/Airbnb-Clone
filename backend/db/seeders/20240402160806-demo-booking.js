"use strict";

const { Booking } = require("../models");

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
    await Booking.bulkCreate(
      [
        {
          id: 1,
          spotId: 2,
          userId: 1,
          startDate: "1910-04-20",
          endDate: "1910-07-20",
        },
        {
          id: 2,
          spotId: 3,
          userId: 2,
          startDate: "1920-09-01",
          endDate: "1920-12-01",
        },
        {
          id: 3,
          spotId: 1,
          userId: 3,
          startDate: "1990-01-01",
          endDate: "1990-12-31",
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
    options.tableName = "Bookings";
    return queryInterface.bulkDelete(options, null, {});
  },
};
