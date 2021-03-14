"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lecturer.hasOne(models.Course, {
        foreignKey: "lecturerId",
        as: "course",
      });
    }
  }
  Lecturer.init(
    {
      lecturerName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Lecturer",
      underscored: true,
    }
  );
  return Lecturer;
};
