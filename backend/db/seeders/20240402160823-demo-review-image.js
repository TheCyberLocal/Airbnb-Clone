"use strict";

const { ReviewImage } = require("../models");

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
    await ReviewImage.bulkCreate(
      [
        {
          reviewId: 1,
          url: "/elonmusk_1.jpg",
        },
        {
          reviewId: 2,
          url: "/elonmusk_2.jpg",
        },
        {
          reviewId: 3,
          url: "/markzuckerberg_1.jpg",
        },
        {
          reviewId: 4,
          url: "/markzuckerberg_2.jpg",
        },
        {
          reviewId: 5,
          url: "/billgates_1.jpg",
        },
        {
          reviewId: 6,
          url: "/billgates_2.jpg",
        },
        {
          reviewId: 10,
          url: "/stevejobs_1.jpg",
        },
        {
          reviewId: 11,
          url: "/stevejobs_2.jpg",
        },
        {
          reviewId: 13,
          url: "/warrenbuffett_1.jpg",
        },
        {
          reviewId: 14,
          url: "/warrenbuffett_2.jpg",
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
    options.tableName = "ReviewImages";
    return queryInterface.bulkDelete(options, null, {});
  },
};
