'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Auth', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      name: {
        type: Sequelize.STRING, unique: true
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users", key: 'id' }
      },
      expiration: {
        type: Sequelize.INTEGER, defaultValue: 5,
        comment: "Values for this column are measured in minutes."
      },
      issuedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Auth');
  }
};