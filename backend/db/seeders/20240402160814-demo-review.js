"use strict";

const { Review } = require("../models");

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
    await Review.bulkCreate(
      [
        {
          spotId: 5,
          userId: 1,
          review:
            "Machu Picchu was breathtaking! The hike up Wayna Picchu was challenging, but the panoramic view of the ancient city nestled amongst the clouds was absolutely worth it. The ingenuity of the Inca engineers in building such a magnificent place in such a harsh environment is truly inspiring. Makes you wonder what other marvels might be hidden out there!",
          stars: 5,
        },
        {
          spotId: 7,
          userId: 1,
          review:
            "The Taj Mahal is undeniably beautiful, a true monument to love. The intricate details in the marblework are incredible. However, the crowds were a bit overwhelming, making it difficult to fully appreciate the serenity of the place.",
          stars: 4,
        },
        {
          spotId: 6,
          userId: 2,
          review:
            "The views from Christ the Redeemer were incredible. It was a powerful experience to see the sprawling cityscape of Rio below. We even got to take a funicular railway up Corcovado mountain which offered some beautiful sights along the way.",
          stars: 4,
        },
        {
          spotId: 7,
          userId: 2,
          review:
            "The Taj Mahal is even more stunning in person than in photos. The use of light and reflection in the design creates a truly magical atmosphere. We learned about the symbolism behind the various architectural elements, which added another layer of appreciation to the visit.",
          stars: 5,
        },
        {
          spotId: 1,
          userId: 3,
          review:
            "The Colosseum is a fascinating piece of history, but it's hard to imagine the gladiatorial battles that took place there. The crowds were large, and it felt a bit overwhelming. However, the underground chambers where the gladiators prepared were interesting to see.",
          stars: 3,
        },
        {
          spotId: 2,
          userId: 3,
          review:
            "Hiking a portion of the Great Wall was an incredible experience. The sheer scale of the wall is mind-boggling, and the views of the surrounding countryside are stunning. It's a powerful reminder of China's rich history and engineering marvel.",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 3,
          review:
            "Petra is unlike anything I've ever seen before. The walk through the Siq to the Treasury was exhilarating. The intricate carvings in the sandstone cliffs are truly impressive. However, navigating the many vendors can be a bit tiresome.",
          stars: 4,
        },
        {
          spotId: 6,
          userId: 3,
          review:
            "Similar to Mark's review, the views from Christ the Redeemer were incredible. We were lucky enough to visit during a clear sunset, which made for some truly spectacular photos.",
          stars: 5,
        },
        {
          spotId: 7,
          userId: 3,
          review:
            "The Taj Mahal is undeniably beautiful, but like Elon mentioned, the crowds can be a bit much. We hired a private guide who was able to share some lesser-known stories about the monument, which added to the experience.",
          stars: 5,
        },
        {
          spotId: 1,
          userId: 4,
          review:
            "The Colosseum is a powerful symbol of Roman engineering and innovation. The sense of history is palpable as you walk through the arena. It would have been interesting to see some kind of interactive exhibit that recreates the gladiatorial contests using modern technology.",
          stars: 4,
        },
        {
          spotId: 2,
          userId: 4,
          review:
            "The Great Wall is a testament to human perseverance. The sheer scale and ambition of the project are awe-inspiring. We took a cable car ride up one of the sections, which offered stunning panoramic views.",
          stars: 4,
        },
        {
          spotId: 7,
          userId: 4,
          review:
            "The Taj Mahal is architecturally impressive, but the throngs of tourists detracted from the experience for me. The focus seemed more on selfies and souvenirs than appreciating the monument itself.",
          stars: 3,
        },
        {
          spotId: 3,
          userId: 5,
          review:
            "Petra exceeded my expectations. The hidden city carved into the sandstone cliffs is truly remarkable. We took a night tour with lanterns, which added a touch of magic to the experience.",
          stars: 5,
        },
        {
          spotId: 6,
          userId: 5,
          review:
            "The Christ the Redeemer statue is an inspiring sight. The crowds were a bit large, but we were able to find a quiet corner to reflect and enjoy the view of Rio.",
          stars: 4,
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
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options, null, {});
  },
};
