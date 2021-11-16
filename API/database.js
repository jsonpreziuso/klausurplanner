/*
Jaime Gamero Maya
12ITa
05.11.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/




const mysql = require('mysql');
const { resolve } = require('path/posix');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "TearTable2021",
    database: "tearproject",
    port: "3306"
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('DB is connected');
    }
});

let db = {};

//get all classes from DB
db.getAllClasses = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT * FROM klassen', (error, classesList) => {
            if (error) {
                return reject(error);
            }
            return resolve(classesList);
        })
    })
}

//get an classe rowi in the table by the id
db.getClasseById = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT idKlassen,name,passwort FROM klassen WHERE IdKlassen =?', id, (error, classe) => {
            if (error) {
                return reject(error);
            }
            return resolve(classe);
        });
    })
}

//get all the exams from the DB
db.getAllExams = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT * FROM klausuren', (error, examsList) => {
            if (error) {
                return reject(error);
            }
            return resolve(examsList);
        })
    })
}

//get an exam row in the table by the id
db.getExamById = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT idKlausuren,fk_lehrer,fk_klassen,fach,datum,schulestunde,raumnummer,thema FROM klausuren WHERE IdKlausuren =?', id, (error, exam) => {
            if (error) {
                return reject(error);
            }
            return resolve(exam);
        });
    })
}

db.getAllTeachers = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT * FROM lehrer', (error, TeachersList) => {
            if (error) {
                return reject(error);
            }
            return resolve(TeachersList);
        })
    })
}

//get an exam row in the table by the id
db.getTeacherById = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT idlehrer,admin,vorname,nachname,email,passwort FROM lehrer WHERE Idlehrer =?', id, (error, teacher) => {
            if (error) {
                return reject(error);
            }
            return resolve(teacher);
        });
    })
}

db.insertTeacher = (body) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('INSERT INTO lehrer(admin,vorname,nachname,email,passwort) VALUES (?,?,?,?,?)',
            [body.admin, body.vorname, body.nachname, body.email, body.passwort], (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
    })
}

db.updateTeacherById = (body, id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('UPDATE lehrer SET admin= ?,vorname= ?,nachname=?,email=?,passwort=?  WHERE idlehrer =?', id, (error, teacher)
        [body.admin, body.vorname, body.nachname, body.email, body.passwort, id], (error, body) => {
            if (error) {
                return reject(error);
            }
            return resolve(body);
        })
    })
}

db.deleteTeacherById = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('DELETE FROM lehrer WHERE idlehrer= ?', id, (error, teacher) => {
            if (error) {
                return reject(error);
            }
            return resolve(teacher);
        })
    })
}

db.insertExam = (body) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('INSERT INTO klausuren(admin,fk_lehrer,fk_klassen,fach,datum,schulestunde,raumnummer,thema) VALUES(?,?,?,?,?,?,?,?)',
            [body.admin, body.fk_lehrer, body.fk_klassen, body.fach, body.datum, body.schulestunde, body.raumnummer, body.thema], (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
    })
}

db.updateExamById = (body, id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('UPDATE klausur SET admin= ?,fk_lehrer= ?,fk_klassen=?,fach=?,datum=,schulestunde=?,raumnummer=?,thema=?  WHERE idExam =?', id, (error, klausur)
        [body.admin, body.fk_lehrer, body.fk_klassen, body.fach, body.datum, body.schulestunde, body.raumnummer, body.thema], (error, body) => {
            if (error) {
                return reject(error);
            }
            return resolve(body);
        })
    })
}

db.deleteExamById = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('DELETE FROM klausuren WHERE idExam= ?', id, (error, klausur) => {
            if (error) {
                return reject(error);
            }
            return resolve(teacher);
        })
    })
}
db.insertClass = (body) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('INSERT INTO klassen(admin,name,passwort) VALUES (?,?,?)',
            [body.admin, body.name, body.password], (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
    })
}

db.updateClassById = (body, id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('UPDATE klassen SET admin= ?,name= ?,passwort=?  WHERE idklassen =?', id, (error, klassen)
        [body.admin, body.name, body.password], (error, body) => {
            if (error) {
                return reject(error);
            }
            return resolve(body);
        })
    })
}

db.deleteClassbyId = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('DELETE FROM klassen WHERE idklassen= ?', id, (error, klassen) => {
            if (error) {
                return reject(error);
            }
            return resolve(klassen);
        })
    })
}
module.exports = mysqlConnection;
module.exports = db;