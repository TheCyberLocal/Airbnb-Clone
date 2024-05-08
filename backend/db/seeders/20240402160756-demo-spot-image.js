"use strict";

const { SpotImage } = require("../models");

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
    await SpotImage.bulkCreate(
      [
        {
          id: 1,
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-33882223/original/a65195bd-1211-45bc-96ca-27e9164d2b2b.jpeg?im_w=1200",
          preview: true,
        },
        {
          id: 2,
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-643406112283067720/original/24bec41f-8427-4efe-bf83-56a45cb9cb72.jpeg?im_w=1200",
          preview: true,
        },
        {
          id: 3,
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-999521786830063746/original/3c5218ee-d2d1-43c2-84dd-c319a6434a0c.jpeg?im_w=1200",
          preview: false,
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
    options.tableName = "SpotImages";
    return queryInterface.bulkDelete(options, null, {});
  },
};
