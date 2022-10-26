const express = require('express');
const app = express();

const mysql = require('mysql');

const cors = require('cors');
app.use(cors());
app.use(express.json());

/* DATABASE CONNECTIVITY */

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "skwer_db"
});

app.get("/getData", (req, res) => {
    db.query("SELECT * from tbl_registration", (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });

});

// app.get("/savesData", (req, res) => {
//     db.query("SELECT * from tbl_registration", (err, result) => {
//         if(err) {
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     });

// });

app.post("/saveData", (req, res) => {
    console.log(req.body);
    const jurisdiction = req.body.jurisdiction;
    const p_name = req.body.p_name;
    const email = req.body.email;

    db.query(
        "INSERT INTO tbl_registration (jurisdiction, p_name, email) VALUES (?, ?, ?)",
        [jurisdiction, p_name, email],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
});

// app.post('/user_form', function (req, res, next) {
//     var name = req.body.name
//     var email = req.body.email
//     var message = req.body.message
//     var sql = `INSERT INTO tbl_registration (jurisdiction, p_name, email) VALUES ('A','B','C')`
//     db.query(sql, function (err, result) {
//       if (err) throw err
//       console.log('Row has been updated')
//       req.flash('success', 'Data stored!')
//       res.redirect('/')
//     })
//   })

app.listen(3001, () => {
    console.log("SERVER RUNS 3001");
})