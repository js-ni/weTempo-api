"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          "Cities",
          "createdAt",
          {
            allowNull: false,
            type: Sequelize.DataTypes.DATE
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "Cities",
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
