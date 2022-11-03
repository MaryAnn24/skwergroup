/* DEPENDENCIES DECLARATION */
const express = require("express");
const app = express();
app.use(express.json());

const bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const cors = require("cors");
app.use(cors());

require("dotenv").config();

const mysql = require('mysql');

/* DATABASE CONNECTIVITY */

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DB_HOST,
    password: "",
    database: process.env.DB_NAME
});

app.post("/saveData", (req, res) => {
    const jurisdiction = req.body.jurisdiction;
    const c_name1 = req.body.c_name1;
    const type_1 = req.body.type_1;
    const c_name2 = req.body.c_name2;
    const type_2 = req.body.type_2;
    const c_name3 = req.body.c_name3;
    const type_3 = req.body.type_3;
    const skwer_package = req.body.skwer_package;
    req.body.add_serv.splice(0,1);
    const add_serv = (req.body.add_serv).toString();
    const p_name = req.body.p_name;
    const email = req.body.email;
    const address = req.body.address;
    const contact_no = req.body.contact_no;
    const package_price = req.body.package_price;
    const add_serv_price = req.body.add_serv_price;
    const regis_remarks = "registered";
    const payment_remarks = "success";
    const dateCreated = req.body.dateCreated;
    const dateUpdated = req.body.dateUpdated;

    db.query(
        "INSERT INTO tbl_registration (jurisdiction, c_name1, type_1, c_name2, type_2, c_name3, type_3, package, add_serv, p_name, email, address, contact_no, package_price, add_serv_price, regis_remarks, payment_remarks, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [jurisdiction, c_name1, type_1, c_name2, type_2, c_name3, type_3, skwer_package, 
            add_serv, p_name, email, address, contact_no, package_price, add_serv_price,
            regis_remarks, payment_remarks, dateCreated, dateUpdated],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );

      
});

const Stripe = require('stripe')('sk_test_51LxV0VHy5jodEtzYOqTQt6pqz1eus4LRK0eyIXQcKcoq0VZHx16DpfmkbvAyl2s7pqxrfYqnOrRUGysoaqnQ5DK700HIhqt4ba');

app.get("/products", (req, res) => {
  res.send(products);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, error => {
    if(error) throw error;

    console.log(`Server running on port: ${PORT}...`);
});

app.post('/payment', async(req, res) => {
    let status, error;

    const { token, amount } = req.body;

    try {
        await Stripe.charges.create({
            source: token.id,
            amount,
            currency: 'usd',
            description: 'Payment from LOCALHOST skwergroup.com',
        });


        status = 'success';
        /* console.log(token); */
    } catch (error) {
        console.log(error);
        status = 'failure';
    }

    res.json({ error, status });
    
});