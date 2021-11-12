/*
Jaime Gamero Maya
12ITa
05.11.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/


const express = require ('express');
const app = express();


const mysqlConnection = require('../API/database');
const db = require ('../API/database');

app.use(express.json());

const exams = [
    { id: 1, lehrerId:1, KlasseId :1, fach :'LF2', Schulestunde:2, raumnummer:201,thema:'Struktogram' },
    { id: 2, lehrerId:3, KlasseId :1, fach :'LF5', Schulestunde :1, raumnummer:201, thema:'Simple present' },
    { id: 3, lehrerId:2, KlasseId :1, fach :'LF6' , Schulestunde :5, raumnummer :201, thema :'UML' },
    { id: 4, lehrerId:4, KlasseId :1, fach :'LF9' , Schulestunde :4, raumnummer :201, thema :'IP6 & Offene netz' },
]


//get all the school classes
app.get('/api/classes', async (req, res, next)=>{
    try {
        const classes = await db.getAllClasses();
        res.status(200).json(classes);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//get a classe by a id given
app.get('/api/classes/:id' ,async (req,res, next) =>{
    try {
        var id = req.params.id;
        const classe = await db.getClasseById(id);
        res.status(200).json(classe);
        
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

// get the complete list of exams
app.get('/api/exams', async (req, res, next)=>{
    try {
        const exams = await db.getAllExams();
        res.status(200).json(exams);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


// get an exam by the id
app.get('/api/exams/:id' ,async (req,res, next) =>{
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
app.get('/api/teachers', async (req, res, next)=>{
    try {
        const teachers = await db.getAllTeachers();
        res.status(200).json(teachers);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


// get a teacher by the id
app.get('/api/teachers/:id' ,async (req,res, next) =>{
    try {
        var id = req.params.id;
        const teacher = await db.getTeacherById(id);
        res.status(200).json(teacher);
        
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

// Create & insert new teacher in teacher's table 
app.post('/api/teachers/', async (req,res,next) =>{
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
app.put('/api/teachers/:id',async (req,res) =>{
    try {
        var body = req.body;
        var id = req.params.id;
        console.log('body',body);
        console.log('id',id);
        var teacher = await db.updateTeacherById(body,id);
        res.sendStatus(204);
    } catch (e) {
        console.log(e); 
        res.sendStatus(400);  
    }
})

// delete teacher's info for a given id
app.delete('/api/teachers/:id',async (req,res) =>{
    try {
        var id = req.params.id;
        //console.log('body',body);
        console.log('id',id);
        var teacher = await db.deleteTeacherById(id);
        res.sendStatus(204);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
})


/*
app.post('/api/teachers',async (req,res,next) =>{
    try {
        const id = req.body.idlehrer;
        const admin = req.body.admin;
        const name = req.body.vorname;
        const surname = req.body.nachname;
        const mail = req.body.email;
        const password = req.body.passwort 
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
        
    }
})
*/













app.get('/', (req, res)=>{
     res.send('Hello world');
});

/*
app.get('/api/exams', (req,res) => {
 //In real scenario here you get a list of exams from DB as return value   
 // By now, we are going to create the endpoints
 res.send(exams);
});

app.get('/api/exams/:id', (req,res) => {
    let exam = exams.find(e => e.id === parseInt(req.params.id));
    if (!exam) {
        //404 code
        res.status(404).send('The exam with the given ID was not found');
    }
    res.send(exam);
})

app.post('/api/exams', (req,res) => {
    const exam = {
      id: 5, lehrerId:4, KlasseId :1, fach :'LF1' , Schulestunde :5, raumnummer :201, thema :'Wirtschaft' 
     }
     exams.push(exam);
     res.send(exams);
 });
 

 app.delete('/api/exams/:id', (req,res) => {
     //Look up the course
    //Not existing , return 404
    let exam = exams.find(e => e.id === parseInt(req.params.id));
    if (!exam) {
        //404 code
        res.status(404).send('The exam with the given ID was not found');
    }
    

    //Delete
    const index = exams.indexOf(exam);
    exams.splice(index,1);

    //Return the same deleted exam
    res.send(exam);
 })
*/




//PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen on port ${port}...`));

