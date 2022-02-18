const Classroom = require('../models').Classroom;
const Student = require('../models').Student;

const create = async (req, res) => {
	try {
		const newClassroom = await Classroom.create({
			class_name: req.body.class_name
		});
		res.status(201).send(newClassroom)
	} catch (err) {
		res.status(400).send(err);
	};
};

const getAll = async (req, res) => {
	try {
		const classrooms = await Classroom.findAll({
			include: [{
				model: Student,
				as: 'students'
			}],
			order: [
				['createdAt', 'DESC'],
				[{ model: Student, as: 'students' }, 'createdAt', 'DESC'],
			]
		});
		res.status(200).send(classrooms);
	} catch (err) {
		res.status(400).send(err);
	};
};

const getOne = async (req, res) => {
	try {
		const classroom = await Classroom.findByPk(req.params.id, {
			include: [{
				model: Student,
				as: 'students'
			}]
		});
		res.status(200).send(classroom);
	} catch (err) {
		res.status(404).send(err)
	};
};

const update = async (req, res) => {
	try {
		const classroom = await Classroom.findByPk(req.params.id, {
			include: [{
				model: Student,
				as: 'students'
			}]
		});

		try {
			const updatedClassroom = await classroom.update({
				class_name: req.body.class_name || classroom.class_name,
			});
			res.status(200).send(updatedClassroom);
		} catch (err) {
			res.status(400).send(err);
		};
	} catch (err) {
		res.status(400).send(err);
	};
};

const deleteOne = async (req, res) => {
	try {
		const classroom = await Classroom.findByPk(req.params.id, {
			include: [{
				model: Student,
				as: 'students'
			}]
		});

		try {
			await classroom.destroy();
			res.status(200).send('CLASSROOM DELETED');
		} catch (err) {
			res.status(400).send(err);
		};
	} catch (err) {
		res.status(400).send(err);
	};
};

module.exports = {
	create,
	getAll,
	getOne,
	update,
	delete: deleteOne
};