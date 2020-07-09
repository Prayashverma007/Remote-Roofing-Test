"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tasks", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100),
        primaryKey: true,
      },
      description: {
        type: Sequelize.TEXT,
      },
      score: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive", "declined", "completed"),
      },
      userId: {
        type: Sequelize.INTEGER,
        unique: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      projectId: {
        type: Sequelize.INTEGER,
        unique: false,
        references: {
          model: "projects",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tasks");
  },
};
