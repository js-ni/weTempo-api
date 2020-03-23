"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Cities", "winSpeed", Sequelize.STRING, {
      after: "cardinal"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Cities", "winSpeed");
  }
};
