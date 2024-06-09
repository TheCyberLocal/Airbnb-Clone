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
          ownerId: 1,
          address: "Colosseum",
          city: "Rome",
          state: "Lazio",
          country: "Italy",
          lat: 41.890251,
          lng: 12.492373,
          name: "Roman Gladiator's Quarters",
          description:
            "Live like a gladiator at the Roman Gladiator's Quarters. Enjoy luxury with a historic twist in the heart of ancient Rome. Imagine yourself in epic battles and grand designs. A stay here is an adventure through time!",
          price: 19000,
        },
        {
          ownerId: 1,
          address: "Great Wall of China",
          city: "Beijing",
          state: "Beijing",
          country: "China",
          lat: 40.431908,
          lng: 116.570374,
          name: "Great Wall Retreat",
          description:
            "Stay on the Great Wall of China! This ancient marvel offers 13,000 miles of epic adventure. Enjoy history, luxury, and breathtaking views. Walk in the footsteps of ancient warriors and dream of future explorations.",
          price: 1500,
        },
        {
          ownerId: 1,
          address: "Petra",
          city: "Ma'an",
          state: "Ma'an",
          country: "Jordan",
          lat: 30.328459,
          lng: 35.444362,
          name: "Petra Desert Oasis",
          description:
            "Land in Petra, an ancient city carved out of rose-red rock. This oasis offers ancient history and futuristic luxury. Discover the past and dream of the future, all while enjoying modern comforts in the desert.",
          price: 57000,
        },
        {
          ownerId: 2,
          address: "Chichen Itza",
          city: "Tinum",
          state: "Yucatán",
          country: "Mexico",
          lat: 20.684284,
          lng: -88.567783,
          name: "Mayan Pyramid Suite",
          description:
            "Stay at Chichen Itza in the Mayan Pyramid Suite. This blend of historical intrigue and modern luxury is perfect for explorers. Dive into ancient mysteries while staying connected. History meets social connectivity here!",
          price: 26000,
        },
        {
          ownerId: 3,
          address: "Machu Picchu",
          city: "Cusco",
          state: "Cusco",
          country: "Peru",
          lat: -13.163141,
          lng: -72.544963,
          name: "Machu Picchu Mountain Lodge",
          description:
            "Adventure awaits at the Machu Picchu Mountain Lodge. Explore ancient Incan ruins and stunning landscapes. Perfect for those who love to learn, discover, and innovate, this lodge combines adventure with modern comforts.",
          price: 5000,
        },
        {
          ownerId: 4,
          address: "Christ the Redeemer",
          city: "Rio de Janeiro",
          state: "Rio de Janeiro",
          country: "Brazil",
          lat: -22.951916,
          lng: -43.210487,
          name: "Christ the Redeemer Loft",
          description:
            "Experience Rio from the Christ the Redeemer Loft. This spot blends elegance and simplicity with panoramic views. Reflect, innovate, and stay inspired in this serene and iconic location. Think different and enjoy the heights.",
          price: 4500,
        },
        {
          ownerId: 5,
          address: "Taj Mahal",
          city: "Agra",
          state: "Uttar Pradesh",
          country: "India",
          lat: 27.175015,
          lng: 78.042155,
          name: "Taj Mahal Palace Suite",
          description:
            "Stay at the Taj Mahal Palace Suite. Enjoy exquisite architecture, serene gardens, and iconic beauty. This royal retreat combines elegance, history, and magic. A wise investment in lasting memories and unparalleled value.",
          price: 100000,
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
