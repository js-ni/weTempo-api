"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("Observations", "uuid", {
      allowNull: false,
      autoIncrement: false,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.removeColumn("Observations", "uuid")
};
