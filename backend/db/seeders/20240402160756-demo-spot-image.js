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
          spotId: 1,
          url: "/TheRomeColosseum_1.jpg",
          preview: true,
        },
        {
          spotId: 1,
          url: "/TheRomeColosseum_2.jpg",
          preview: false,
        },
        {
          spotId: 1,
          url: "/TheRomeColosseum_3.jpg",
          preview: false,
        },
        {
          spotId: 1,
          url: "/TheRomeColosseum_4.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "/TheGreatWallOfChina_1.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "/TheGreatWallOfChina_2.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "/TheGreatWallOfChina_3.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "/TheGreatWallOfChina_4.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "/TheGreatWallOfChina_5.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "/ThePetra_1.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "/ThePetra_2.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "/ThePetra_3.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "/ThePetra_4.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "/ThePetra_5.jpg",
          preview: false,
        },
        {
          spotId: 4,
          url: "/TheChichenItzaTemple_1.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "/TheChichenItzaTemple_2.jpg",
          preview: false,
        },
        {
          spotId: 4,
          url: "/TheChichenItzaTemple_3.jpg",
          preview: false,
        },
        {
          spotId: 4,
          url: "/TheChichenItzaTemple_4.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "/MachuPicchu_1.jpg",
          preview: true,
        },
        {
          spotId: 5,
          url: "/MachuPicchu_2.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "/MachuPicchu_3.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "/MachuPicchu_4.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "/MachuPicchu_5.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "/ChristTheRedeemer_1.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "/ChristTheRedeemer_2.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "/ChristTheRedeemer_3.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "/ChristTheRedeemer_4.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "/ChristTheRedeemer_5.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "/TheTajMahal_1.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "/TheTajMahal_2.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "/TheTajMahal_3.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "/TheTajMahal_4.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "/TheTajMahal_5.jpg",
          preview: false,
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
    options.tableName = "SpotImages";
    return queryInterface.bulkDelete(options, null, {});
  },
};
