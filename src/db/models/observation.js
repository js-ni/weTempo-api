"use strict";
module.exports = (sequelize, DataTypes) => {
  const Observation = sequelize.define(
    "Observations",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        allowNull: false,
        autoIncrement: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" }
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: { model: "Cities", key: "id" }
      }
    },
    {}
  );
  Observation.associate = function(models) {
    Observation.belongsTo(models.Users, { foreignKey: "userId" });
    Observation.belongsTo(models.Cities, { foreignKey: "cityId" });
  };
  return Observation;
};
