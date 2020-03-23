"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("Cities", "uuid", {
      allowNull: false,
      autoIncrement: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.removeColumn("Cities", "uuid")
};
