"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentCourse extends Model {
    static associate(models) {
      // define association here
    }
  }
  StudentCourse.init(
    {
      studentId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "StudentCourse",
      underscored: true
    }
  );
  return StudentCourse;
};
