'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Observations', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      text: {
        type: Sequelize.TEXT, allowNull: false
      },
      date: {
        type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users", key: 'id' }
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: { model: "Cities", key: 'id' }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Observations');
  }
};