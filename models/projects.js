module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    name: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "declined", "completed"),
    },
  });

  Project.associate = (models) => {
    Project.belongsTo(models.Users, {
      foreignKey: "userId",
    });
    Project.hasMany(models.Tasks, {
      foreignKey: "projectId",
    });
  };
  return Project;
};
