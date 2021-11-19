/*
Jaime Gamero Maya
12ITa
05.11.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/

const mysql = require('mysql');
const { resolve } = require('path/posix');
var crypto = require('crypto');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tearproject",
    port: "8889"
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
        mysqlConnection.query('SELECT idKlausuren,fk_lehrer,fk_klassen,fach,datum,schulestunde,raumnummer,thema FROM klausuren WHERE fk_klassen =?', id, (error, exam) => {
            if (error) {
                return reject(error);
            }
            return resolve(exam);
        });
    })
}

db.getAllTeachers = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT * FROM lehrer', (error, teachersList) => {
            if (error) {
                return reject(error);
            }
              for(i = 0; i < teachersList.length; i++){
                var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
                var mystr = mykey.update(teachersList[i]["passwort"], 'hex', 'utf8')
                mystr += mykey.final('utf8');
                teachersList[i]["passwort"] = mystr;
              }
            return resolve(teachersList);
        })
    })
}

db.insertTeacher = (body) => {
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var password = mykey.update(body.passwort, 'utf8', 'hex')
    password += mykey.final('hex');

    return new Promise((resolve, reject) => {
        mysqlConnection.query('INSERT INTO lehrer(admin,vorname,nachname,email,passwort) VALUES (?,?,?,?,?)',
            [body.admin, body.vorname, body.nachname, body.email, password], (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
    })
}

db.updateTeacherById = (body, id) => {

    return new Promise((resolve, reject) => {
        if(body.action == "lehrerMeinKonto"){

            var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
            var password = mykey.update(body.passwort, 'utf8', 'hex')
            password += mykey.final('hex');

            mysqlConnection.query("UPDATE lehrer SET vorname= '" + body.vorname + "',nachname= '" + body.nachname + "',email= '" + body.email + "',passwort= '" + password + "' WHERE idlehrer = " + body.idlehrer, (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            })
        }else if(body.action == "resetpassword"){

            var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
            var password = mykey.update(body.passwort, 'utf8', 'hex')
            password += mykey.final('hex');

            mysqlConnection.query("UPDATE lehrer SET vorname= '" + body.vorname + "',nachname= '" + body.nachname + "',email= '" + body.email + "',passwort= '" + password + "' WHERE idlehrer = " + body.idlehrer, (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            })
        }else{
            mysqlConnection.query("UPDATE lehrer SET admin= '" + body.admin + "',vorname= '" + body.vorname + "',nachname= '" + body.nachname + "',email= '" + body.email + "' WHERE idlehrer = " + body.idlehrer, (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
           })
        }
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
        mysqlConnection.query('INSERT INTO klausuren(fk_klassen,lehrername,klassename,fach,datum,schulestunde,raumnummer,thema) VALUES(?,?,?,?,?,?,?,?)',
            [body.idklassen, body.lehrername, body.klassename, body.fach, body.datum, body.schulestunde, body.raumnummer, body.thema], (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
    })
}

db.updateExamById = (body) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query("UPDATE klausuren SET fk_klassen= '" + body.idklassen + "',klassename= '" + body.klassename + "',fach= '" + body.fach + "',datum= '" + body.datum + "',schulestunde= '" + body.schulestunde + "',raumnummer= '" + body.raumnummer + "',thema= '" + body.thema + "' WHERE idklausuren = " + body.idklausuren, (error, body) => {
            if (error) {
                return reject(error);
            }
            return resolve(body);
        })
    })
}

db.deleteExamById = (id) => {
    return new Promise((resolve, reject) => {
        if(id == 9999){
          mysqlConnection.query('DELETE FROM klausuren', (error, id) => {
              if (error) {
                  return reject(error);
              }
              return resolve(id);
          })
        }else{
          mysqlConnection.query('DELETE FROM klausuren WHERE idklausuren= ?', id, (error, id) => {
              if (error) {
                  return reject(error);
              }
              return resolve(id);
          })
        }
    })
}
db.insertClass = (body) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query("INSERT INTO klassen(name,passwort) VALUES ('" + body.name + "', '" + body.passwort + "')",
            [body.name, body.password], (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
    })
}

db.deleteClassbyId = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query('DELETE FROM klassen WHERE idklassen=' + id, (error, klassen) => {
            if (error) {
                return reject(error);
            }
            return resolve(klassen);
        })
    })
}
module.exports = mysqlConnection;
module.exports = db;
