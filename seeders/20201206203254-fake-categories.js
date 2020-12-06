"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "strategy",
        imageUrl: "https://ivanhoe.pro/wp-content/uploads/2018/09/strategy-and-tactics-pro-.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "survival",
        fullName: "survival-horror",
        imageUrl:
          "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/08/pans-labyrinthlibraryfest.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "fps",
        fullName: "first-person-shooter",
        imageUrl:
          "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/08/pans-labyrinthlibraryfest.jpg",
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
