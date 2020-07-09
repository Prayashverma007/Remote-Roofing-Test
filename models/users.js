`use strict`;
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Projects, {
      foreignKey: "userId",
    });
    Users.hasMany(models.Tasks, {
      foreignKey: "userId",
    });
  };

  return Users;
};
