"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          "Observations",
          "createdAt",
          {
            allowNull: false,
            type: Sequelize.DataTypes.DATE
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "Observations",
          "updatedAt",
          {
            allowNull: false,
            type: Sequelize.DataTypes.DATE
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn("Cities", "createdAt", { transaction: t }),
        queryInterface.removeColumn("Cities", "updatedAt", { transaction: t })
      ]);
    });
  }
};
