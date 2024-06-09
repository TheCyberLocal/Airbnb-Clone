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
          spotId: 5,
          userId: 1,
          startDate: "2021-06-10",
          endDate: "2021-06-20",
        },
        {
          spotId: 7,
          userId: 1,
          startDate: "2020-12-01",
          endDate: "2020-12-15",
        },
        {
          spotId: 6,
          userId: 2,
          startDate: "2021-01-10",
          endDate: "2021-01-20",
        },
        {
          spotId: 7,
          userId: 2,
          startDate: "2022-02-01",
          endDate: "2022-02-14",
        },
        {
          spotId: 1,
          userId: 3,
          startDate: "2021-11-01",
          endDate: "2021-11-30",
        },
        {
          spotId: 2,
          userId: 3,
          startDate: "2022-05-10",
          endDate: "2022-05-20",
        },
        {
          spotId: 3,
          userId: 3,
          startDate: "2022-11-01",
          endDate: "2022-11-30",
        },
        {
          spotId: 6,
          userId: 3,
          startDate: "2020-12-10",
          endDate: "2020-12-24",
        },
        {
          spotId: 7,
          userId: 3,
          startDate: "2021-08-01",
          endDate: "2021-08-15",
        },
        {
          spotId: 1,
          userId: 4,
          startDate: "2022-10-01",
          endDate: "2022-10-15",
        },
        {
          spotId: 2,
          userId: 4,
          startDate: "2021-03-05",
          endDate: "2021-03-20",
        },
        {
          spotId: 7,
          userId: 4,
          startDate: "2022-04-01",
          endDate: "2022-04-15",
        },
        {
          spotId: 3,
          userId: 5,
          startDate: "2022-03-01",
          endDate: "2022-03-14",
        },
        {
          spotId: 6,
          userId: 5,
          startDate: "2020-10-01",
          endDate: "2020-10-20",
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
    options.tableName = "Bookings";
    return queryInterface.bulkDelete(options, null, {});
  },
};
