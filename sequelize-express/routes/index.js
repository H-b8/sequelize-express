var express = require('express');
var router = express.Router();
const classroomController = require('../controllers').classrooms;
const studentController = require('../controllers').students;
const lecturerController = require('../controllers').lecturer;
const courseController = require('../controllers').course;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// CLASSROOMS
router.get('/api/classroom', classroomController.getAll);
router.get('/api/classroom/:id', classroomController.getOne);
router.post('/api/classroom', classroomController.create);
router.put('/api/classroom/:id', classroomController.update);
router.delete('/api/classroom/:id', classroomController.delete);

// STUDENTS
router.get('/api/student', studentController.list);
router.get('/api/student/:id', studentController.getById);
router.post('/api/student', studentController.add);
router.put('/api/student/:id', studentController.update);
router.delete('/api/student/:id', studentController.delete);

// LECTURERS
router.get('/api/lecturer', lecturerController.list);
router.get('/api/lecturer/:id', lecturerController.getById);
router.post('/api/lecturer', lecturerController.add);
router.put('/api/lecturer/:id', lecturerController.update);
router.delete('/api/lecturer/:id', lecturerController.delete);

// COURSES
router.get('/api/course', courseController.list);
router.get('/api/course/:id', courseController.getById);
router.post('/api/course', courseController.add);
router.put('/api/course/:id', courseController.update);
router.delete('/api/course/:id', courseController.delete);

module.exports = router;
