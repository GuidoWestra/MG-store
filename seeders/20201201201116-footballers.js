"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        fullName: "Leo Messi",
        email: "barca10@barcelonafc.com",
        address: "Albert Cuypstraat",
        password: "barca",
        createdAt: new Date(),
        updatedAt: new Date(),
        userType: 0,
      },
      {
        fullName: "Ronaldo",
        email: "messilover69@juventusfc.com",
        address: "Albert Cuypstraat",
        password: "messi",
        createdAt: new Date(),
        updatedAt: new Date(),
        userType: 0,
      },
      {
        fullName: "Theirri Henri",
        email: "tdawg@henri.com",
        address: "Albert Cuypstraat",
        password: "henry",
        createdAt: new Date(),
        updatedAt: new Date(),
        userType: 0,
      },
      {
        fullName: "milly",
        password: "hello",
        email: "milo@milo.com",
        address: "Albert Cuypstraat",
        createdAt: new Date(),
        updatedAt: new Date(),
        userType: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null);
  },
};
