"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Classroom.hasMany(models.Student, {
        foreignKey: "classroomId",
        as: "students",
      });
    }
  }
  Classroom.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      className: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Classroom",
      underscored: true,
    }
  );
  return Classroom;
};
