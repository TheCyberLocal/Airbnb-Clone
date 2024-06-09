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
            "Live like a gladiator in the heart of ancient Rome at the Roman Gladiator's Quarters. This place is all about epic battles and grand designs, much like our journey to space. Enjoy luxurious accommodations with a historic twist and imagine yourself in the grandeur of ancient times.",
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
            "Ever wondered what it's like to stay on Mars? Well, this isn't Mars, but it's the Great Wall of China, which is the next best thing! Stretching over 13,000 miles, this ancient marvel is perfect for those who love epic adventures. Enjoy the ultimate blend of history and luxury with breathtaking views and modern comforts. Book a stay and walk in the footsteps of ancient warriors while dreaming about our future on Mars.",
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
            "Step into a time machine and land in Petra, an ancient city carved out of rose-red rock. This is not just a stay; it's an adventure! Perfect for explorers and dreamers, Petra Desert Oasis offers a mix of ancient history and futuristic luxury. Discover the mysteries of the past and think about the possibilities of the future, all while enjoying modern comforts in the heart of the desert.",
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
            "Connect with ancient history at Chichen Itza, the perfect place for those who love exploration and discovery. This Mayan Pyramid Suite offers a unique blend of historical intrigue and modern luxury. Whether you're diving into the mysteries of the past or just checking in on your latest status update, this spot has got you covered. Experience history with a touch of social connectivity!",
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
            "Get ready for an adventure in the clouds at the Machu Picchu Mountain Lodge. This place is perfect for the curious and the adventurous, much like our journey with technology. Hike through stunning landscapes, explore ancient Incan ruins, and enjoy modern comforts. It's the ultimate getaway for those who love to learn, discover, and innovate.",
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
            "Experience the spiritual and scenic heights of Rio de Janeiro from the Christ the Redeemer Loft. Just like our revolutionary products, this place offers a unique blend of elegance and simplicity. With panoramic views of the city and the ocean, it’s the perfect spot to reflect, innovate, and think different. Enjoy the serene atmosphere and stay inspired in this iconic location.",
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
            "Experience the epitome of love and luxury at the Taj Mahal Palace Suite. This isn't just any stay; it's a royal retreat. Enjoy the exquisite architecture, serene gardens, and the iconic beauty of the Taj Mahal. Just like a wise investment, this experience promises lasting memories and unparalleled value. Treat yourself to a stay that combines elegance, history, and a touch of magic.",
          price: 100000,
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
    options.tableName = "Spots";
    return queryInterface.bulkDelete(options, null, {});
  },
};
