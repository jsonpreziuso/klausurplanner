/*
Jaime Gamero Maya
12ITa
05.11.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mysqlConnection = require('./database');
const db = require('./database');

// Render static files
app.use(express.static('public'));
app.use(express.json());

//get all the school classes
app.get('/api/classes', async (req, res, next) => {
    try {
        const classes = await db.getAllClasses();
        res.status(200).json(classes);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// get the complete list of exams
app.get('/api/exams', async (req, res, next) => {
    try {
        console.log(req.body);
        const exams = await db.getAllExams();
        res.status(200).json(exams);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// get an exam by the id
app.get('/api/exams/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        const exam = await db.getExamById(id);
        res.status(200).json(exam);

    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

// get the complete list of teachers
app.get('/api/teachers', async (req, res, next) => {
    try {
        const teachers = await db.getAllTeachers();
        res.status(200).json(teachers);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Create & insert new teacher in teacher's table
app.post('/api/teachers/', async (req, res, next) => {
    try {
        var body = req.body;
        console.log('body', body)
        var teacher = await db.insertTeacher(body);
        res.status(204).json(teacher);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// update teacher's info for a given id
app.put('/api/teachers/', async (req, res) => {
    try {
        var body = req.body;
        console.log('body', body);
        var teacher = await db.updateTeacherById(body);
        res.sendStatus(204);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// delete teacher's info for a given id
app.delete('/api/teachers/:id', async (req, res) => {
    try {
        var id = req.body["id"];
        console.log('id', id);
        var teacher = await db.deleteTeacherById(id);
        res.sendStatus(204);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// Create & insert new exams in exams table
app.post('/api/exams', async (req, res, next) => {
    try {
        var body = req.body;
        console.log('body', body)
        var teacher = await db.insertExam(body);
        res.status(204).json(teacher);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// update exams
app.put('/api/exams/', async (req, res) => {
    try {
        var body = req.body;
        console.log('body', body);
        var teacher = await db.updateExamById(body);
        res.sendStatus(204);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// delete exams info for a given id
app.delete('/api/exams/:id', async (req, res) => {
    try {
        var id = req.body["id"];
        console.log('id', id);
        var teacher = await db.deleteExamById(id);
        res.sendStatus(204);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// Create & insert new classes in klassen table
app.post('/api/classes', async (req, res, next) => {
    try {
        var body = req.body;
        console.log('body', body)
        var classes = await db.insertClass(body);
        res.status(204).json(classes);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

// delete classes info for a given id
app.post('/api/classes/:id', async (req, res) => {
    try {
        var id = req.body["id"];
        console.log('id = ', id);
        var result = await db.deleteClassbyId(id);
        res.sendStatus(204);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})

//PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listen on port ${port}...`));
