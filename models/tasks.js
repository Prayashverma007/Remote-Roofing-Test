"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define("tasks", {
    name: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "declined", "completed"),
    },
  });

  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users, {
      foreignKey: "userId",
    });
    Tasks.belongsTo(models.Projects, {
      foreignKey: "projectId",
    });
  };

  return Tasks;
};
