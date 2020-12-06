"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "Skyrum",
        description: "pirates in the sky... rum included!",
        categoryName: "strategy",
        price: 10,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "call of honour: medal of duty",
        description: "world war 2",
        categoryName: "fps",
        price: 10,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "dayzed",
        description: "Zombies and stuff",
        categoryName: "survival",
        price: 10,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "call of honour: II",
        description: "world war 2 again",
        categoryName: "fps",
        price: 10,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "fifo 2020",
        description: "Sports game",
        categoryName: "strategy",
        price: 10,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
