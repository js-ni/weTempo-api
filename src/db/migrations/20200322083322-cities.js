'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cities', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      name: {
        type: Sequelize.STRING, allowNull: false, unique: true
      },
      flagUrl: {
        type: Sequelize.STRING, allowNull: true, unique: true
      },
      cardinal: {
        type: Sequelize.STRING, allowNull: false, unique: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cities');
  }
};