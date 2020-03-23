"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Cities", "flagUrl", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Cities", "flagUrl");
  }
};
