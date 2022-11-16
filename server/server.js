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


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

/* DATABASE CONNECTIVITY */

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DB_HOST,
    password: "",
    database: process.env.DB_NAME
});

app.post("/sendEmail", (req, res) => {

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
    const add_serv = (req.body.add_serv).toString();
    const salutation = req.body.salutation;
    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const email = req.body.email;
    const c_street = req.body.c_street;
    const c_city = req.body.c_city;
    const c_state = req.body.c_state;
    const c_zip = req.body.c_zip;
    const c_country = req.body.c_country;
    const p_street = req.body.p_street;
    const p_city = req.body.p_city;
    const p_state = req.body.p_state;
    const p_zip = req.body.p_zip;
    const p_country = req.body.p_country;
    const contact_no = req.body.contact_no;
    const package_price = req.body.package_price;
    const add_serv_price = req.body.add_serv_price;
    const regis_remarks = "registered";
    const payment_remarks = "success";
    const dateCreated = req.body.dateCreated;
    const dateUpdated = req.body.dateUpdated;
    

    db.query(
        "INSERT INTO tbl_registration (jurisdiction, c_name1, type_1, c_name2, type_2, c_name3, type_3, package, add_serv, salutation, f_name, l_name, email, c_street, c_city, c_state, c_zip, c_country, p_street, p_city, p_state, p_zip, p_country, contact_no, package_price, add_serv_price, regis_remarks, payment_remarks, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [jurisdiction, c_name1, type_1, c_name2, type_2, c_name3, type_3, skwer_package, add_serv, salutation,
        f_name, l_name, email, c_street, c_city, c_state, c_zip, c_country, p_street, p_city, 
        p_state, p_zip, p_country, contact_no, package_price, add_serv_price, regis_remarks, payment_remarks, dateCreated, dateUpdated],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
    );

    const order_no = "1234";
    // const jurisdiction = "Canada";
    // const c_name1 = "Sample LLC";
    // const type_1 = "Ltd";
    // const c_name2 = "Sample LLC2";
    // const type_2 = "Ltd";
    // const c_name3 = "Sample LLC3";
    // const type_3 = "Ltd";
    const skwer_package_2 = "Premium";
    const add_serv_2 = [1, 2, 3];
    // const salutation = "Ms.";
    const f_name_2 = "Mary Ann";
    const l_name_2 = "Tapiru";
    const email_2 = "maryann.baricante24@gmail.com";
    const c_street_2 = "Deira";
    const c_city_2 = "Dubai";
    const c_state_2 = "Dubai";
    const c_zip_2 = 00000;
    const c_country_2 = "United Arab Emirates";
    const p_street_2 = "San Agustin Norte";
    const p_city_2 = "Arayat";
    const p_state_2 = "Pampanga";
    const p_zip_2 = 12345;
    const p_country_2 = "Philippines";
    const contact_no_2 = "+971508780933";
    const package_price_2 = 1500;
    const add_serv_price_2 = 700;
    
    const msg = {
        to: {
            email: email_2,
            name: f_name_2 + l_name_2
        },
        from: {
            email: "maryann@skwergroup.com",
            name: "Skwer Group"
        },
        cc: 'maryann@skwergroup.com',
        subject: 'Order Summary',
        templateId: 'd-2edc539b8c114d95b61dea9fbc5f3d16',
        dynamicTemplateData: {
            order_no: order_no,
            
            c_address: c_street_2 + ' ' + c_city_2 + ' ' + c_state_2 + ', ' + c_country_2 + ' (' + c_zip_2 + ')',
            p_address: p_street_2 + ' ' + p_city_2 + ' ' + p_state_2 + ', ' + p_country_2 + ' (' + p_zip_2 + ')',
            
            package: skwer_package_2,
            add_serv: add_serv_2,
            pack_price: package_price_2,
            add_price: add_serv_price_2,
            total: package_price_2 + add_serv_price_2
        }
    }
    sgMail.send(msg, function (err, info) {
        if(err) {
            console.log("Email Not sent");
        } else {
            console.log("Email success");
        }
    });

    
});

const Stripe = require('stripe')('sk_test_51LxV0VHy5jodEtzYOqTQt6pqz1eus4LRK0eyIXQcKcoq0VZHx16DpfmkbvAyl2s7pqxrfYqnOrRUGysoaqnQ5DK700HIhqt4ba');

app.get("/products", (req, res) => {
  res.send(products);
});

app.post('/payment', async(req, res) => {
    let status, error;

    const { token, amount } = req.body;

    try {
        await Stripe.charges.create({
            source: token.id,
            amount,
            currency: 'usd',
            description: 'Payment from LOCALHOST v2 skwergroup.com',
        });


        status = 'success';
        /* console.log(token); */
        
    } catch (error) {
        console.log(error);
        status = 'failure';
    }

    res.json({ error, status });
    
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, error => {
    if(error) throw error;

    console.log(`Server running on port: ${PORT}...`);
});