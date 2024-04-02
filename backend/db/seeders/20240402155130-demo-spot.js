"use strict";

const { Spot } = require("../models");

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
    await Spot.bulkCreate(
      [
        {
          id: 1,
          ownerId: 1,
          address: "6555 Polymer Way",
          city: "NukeTown",
          state: "Rhode Island",
          country: "United States of America",
          lat: 65.5944643,
          lng: 25.6515458,
          name: "Victorian",
          description: "The Blue Room",
          price: 209.99,
        },
        {
          id: 2,
          ownerId: 2,
          address: "4785 Destiny Street",
          city: "Sparkle City",
          state: "California",
          country: "United States of America",
          lat: 65.9088243,
          lng: 10.6516835,
          name: "TreeHouse",
          description: "Just a bit adventurous",
          price: 380.99,
        },
        {
          id: 3,
          ownerId: 3,
          address: "8000 Out There Lane",
          city: "Stary Night",
          state: "Toronto",
          country: "Canada",
          lat: 35.8088195,
          lng: 26.9132287,
          name: "MT. Fire Pit",
          description: "Deep forest cabin",
          price: 145.99,
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
    options.tableName = "Spots";
    return queryInterface.bulkDelete(options, null, {});
  },
};
