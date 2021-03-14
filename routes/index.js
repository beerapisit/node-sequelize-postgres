const express = require("express");
const router = express.Router();

const classroomController = require('../controllers').classroom;
const studentController = require('../controllers').student;
const lecturerController = require('../controllers').lecturer;
const courseController = require('../controllers').course;

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

/* Classroom Router */
router.get("/classroom", classroomController.list);
router.get("/classroom/:id", classroomController.getById);
router.post("/classroom", classroomController.add);
router.put("/classroom/:id", classroomController.update);
router.delete("/classroom/:id", classroomController.delete);

/* Student Router */
router.get("/student", studentController.list);
router.get("/student/:id", studentController.getById);
router.post("/student", studentController.add);
router.put("/student/:id", studentController.update);
router.delete("/student/:id", studentController.delete);

/* Lecturer Router */
router.get("/lecturer", lecturerController.list);
router.get("/lecturer/:id", lecturerController.getById);
router.post("/lecturer", lecturerController.add);
router.put("/lecturer/:id", lecturerController.update);
router.delete("/lecturer/:id", lecturerController.delete);

/* Course Router */
router.get("/course", courseController.list);
router.get("/course/:id", courseController.getById);
router.post("/course", courseController.add);
router.put("/course/:id", courseController.update);
router.delete("/course/:id", courseController.delete);

/* Advance Router */
router.post("/student/add-course", studentController.addCourse);
router.post("/classroom/add-with-students", classroomController.addWithStudents);
router.post("/lecturer/add-with-course", lecturerController.addWithCourse);

module.exports = router;
