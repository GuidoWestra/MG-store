"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("orders", [
      {
        productId: 1,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        userId: 1,
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
