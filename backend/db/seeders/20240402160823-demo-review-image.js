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
          id: 1,
          reviewId: 1,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-33882223/original/a322808e-7243-467b-8817-3be02b9b1b08.jpeg?im_w=720",
        },
        {
          id: 2,
          reviewId: 2,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-643406112283067720/original/b1589486-0c95-4ed5-8ad7-94a0e8f4e975.jpeg?im_w=720",
        },
        {
          id: 3,
          reviewId: 3,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-999521786830063746/original/7d02ff44-5167-4b6e-b67b-577726605ac1.jpeg?im_w=720",
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
    options.tableName = "ReviewImages";
    return queryInterface.bulkDelete(options, null, {});
  },
};
