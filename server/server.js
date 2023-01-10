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

/* const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey("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");*/

/* DATABASE CONNECTIVITY */

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DB_HOST,
    password: "",
    database: process.env.DB_NAME
});

const nodemailer = require("nodemailer"); // Require the Nodemailer package

/* SAVE DATA IN MYSQL DATABASE */
app.post("/saveData", (req, res) => {
    const or_no = req.body.or_no;
    const jurisdiction = req.body.jurisdiction;
    const c_name1 = req.body.c_name1;
    const type_1 = req.body.type_1;
    const c_name2 = req.body.c_name2;
    const type_2 = req.body.type_2;
    const c_name3 = req.body.c_name3;
    const type_3 = req.body.type_3;
    const skwer_package = req.body.skwer_package;
    const bank = (req.body.bank).toString();
    const add_serv = (req.body.add_serv).toString();
    const salutation = req.body.salutation;
    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const email = req.body.email;
    const nationality = req.body.nationality;
    const bdate = req.body.bdate;
    const p_street = req.body.p_street;
    const p_city = req.body.p_city;
    const p_state = req.body.p_state;
    const p_zip = req.body.p_zip;
    const p_country = req.body.p_country;
    const contact_no = req.body.contact_no;
    const package_price = req.body.package_price;
    const add_serv_price = req.body.add_serv_price;
    const bank_serv_price = req.body.bank_serv_price;
    const regis_remarks = "registered";
    const payment_remarks = "unpaid";
    const dateCreated = req.body.dateCreated;
    const dateUpdated = req.body.dateUpdated;
  
  db.query(`SELECT count(or_no) as c_or FROM tbl_registration where or_no =${or_no}`, function (err, result) {
    if (err) throw err;
    
    let results=JSON.parse(JSON.stringify(result));
   
    if(results[0].c_or===0) {
      db.query(
        "INSERT INTO tbl_registration (or_no, jurisdiction, c_name1, type_1, c_name2, type_2, c_name3, type_3, package, bank, add_serv, salutation, f_name, l_name, email, nationality, bdate, p_street, p_city, p_state, p_zip, p_country, contact_no, package_price, add_serv_price, bank_serv_price, regis_remarks, payment_remarks, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [or_no, jurisdiction, c_name1, type_1, c_name2, type_2, c_name3, type_3, skwer_package, bank, add_serv, salutation,
        f_name, l_name, email, nationality, bdate, p_street, p_city, p_state, p_zip, p_country, contact_no, package_price, 
        add_serv_price, bank_serv_price, regis_remarks, payment_remarks, dateCreated, dateUpdated],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    }
  });

});

/* UPDATE PAYMENT IN COMPLETION PAGE */
app.post("/updatePayment", (req, res) => {
  /*======= DATABASE QUERY - SELECT DATA OF RECENT CUSTOMER =======*/
  db.query('SELECT or_no, package, bank, add_serv, package_price, add_serv_price, bank_serv_price, email FROM tbl_registration order by id desc limit 1', function (err, latest_or) { 
    if (err) throw err;
    let or_no=JSON.parse(JSON.stringify(latest_or));
    
    const order_no = or_no[0].or_no;
    const skwer_package = or_no[0].package;
    const bank = or_no[0].bank;
    const add_serv = or_no[0].add_serv;
    const package_price = or_no[0].package_price;
    const add_serv_price = or_no[0].add_serv_price;
    const bank_serv_price = or_no[0].bank_serv_price;
    const email = or_no[0].email;
    const total = parseFloat(package_price) + parseFloat(add_serv_price) + parseFloat(bank_serv_price);

  /*======= UPDATE ONCE EXISTING =======*/
    /* update statment */
    let sql = `UPDATE tbl_registration
              SET payment_remarks = ?
              WHERE or_no = ?`;

    /*console.log(total);*/
    let data = ["paid", order_no];

    /* execute the UPDATE statement */
    db.query(sql, data, function (err, result) {
      if (err) throw err;
      /*console.log('updated');*/
     });

  /*======= EMAIL SENDING =======*/
      /*var email_temp = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><p style="color:blue">'+ order_no +'</p></body></html>';*/

      var email_template_3 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"> <meta http-equiv="X-UA-Compatible" content="IE=Edge"><!--[if (gte mso 9)|(IE)]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><!--[if (gte mso 9)|(IE)]> <style type="text/css"> body{width: 600px;margin: 0 auto;}table{border-collapse: collapse;}table, td{mso-table-lspace: 0pt;mso-table-rspace: 0pt;}img{-ms-interpolation-mode: bicubic;}</style><![endif]--> <style type="text/css"> body, p, div{font-family: arial,helvetica,sans-serif; font-size: 14px;}body{color: #000000;}body a{color: #1188E6; text-decoration: none;}p{margin: 0; padding: 0;}table.wrapper{width:100% !important; table-layout: fixed; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}img.max-width{max-width: 100% !important;}.column.of-2{width: 50%;}.column.of-3{width: 33.333%;}.column.of-4{width: 25%;}ul ul ul ul{list-style-type: disc !important;}ol ol{list-style-type: lower-roman !important;}ol ol ol{list-style-type: lower-latin !important;}ol ol ol ol{list-style-type: decimal !important;}@media screen and (max-width:480px){.preheader .rightColumnContent, .footer .rightColumnContent{text-align: left !important;}.preheader .rightColumnContent div, .preheader .rightColumnContent span, .footer .rightColumnContent div, .footer .rightColumnContent span{text-align: left !important;}.preheader .rightColumnContent, .preheader .leftColumnContent{font-size: 80% !important; padding: 5px 0;}table.wrapper-mobile{width: 100% !important; table-layout: fixed;}img.max-width{height: auto !important; max-width: 100% !important;}a.bulletproof-button{display: block !important; width: auto !important; font-size: 80%; padding-left: 0 !important; padding-right: 0 !important;}.columns{width: 100% !important;}.column{display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important;}.social-icon-column{display: inline-block !important;}}</style> <style>@media screen and (max-width:480px){table\0{width: 480px !important;}}</style> </head> <body> <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FBFBFB;"> <div class="webkit"> <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FBFBFB"> <tr> <td valign="top" bgcolor="#FBFBFB" width="100%"> <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0"> <tr> <td width="100%"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <td><!--[if mso]> <center> <table><tr><td width="600"><![endif]--> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center"> <tr> <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#ffffff" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;"> <tr> <td role="module-content"> <p></p></td></tr></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#404145" data-distribution="1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="600" style="width:600px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="1b4a2073-679e-471e-b2ae-fae30ae5d218"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:30px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:20% !important; width:20%; height:auto !important;" width="120" alt="SKWER GROUP LOGO" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/4297894fb08afbbc/ef9b210d-38a1-4ba8-97c2-74512a317635/1541x1066.png"> </td></tr></tbody> </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b5ec1f4d-9c37-472b-98ee-6614abfbb7c3"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:20% !important; width:20%; height:auto !important;" width="NaN" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/4297894fb08afbbc/35eab510-ef89-418b-9ac1-acd1eb80f4d0/512x512.png"> </td></tr></tbody> </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ba5d5bdf-956a-41d6-9388-62e2d3779c17.2" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #ffffff; font-size: 24px"><strong>THANKS FOR YOUR ORDER!!!</strong></span></div><div style="font-family: inherit; text-align: center"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline; color: #ffffff">Your order number:'+ order_no +'</span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#000000" data-distribution="1,1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="290" style="width:290px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e77e9fdd-2ca1-47fd-8606-12495480c9f3" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:5px 0px 5px 10px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px; color: #ffffff"><strong>Order Summary</strong></span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table><table width="290" style="width:290px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f2bcb495-2bfa-4ca1-8e8d-8e201b754449" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:5px 10px 5px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px; color: #ffffff"><strong>Price</strong></span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 10px 0px 10px;" bgcolor="#FFFFFF" data-distribution="1,1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e77e9fdd-2ca1-47fd-8606-12495480c9f3.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Package:'+ skwer_package +'</span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Additional Services:' + add_serv + '</span></div><div style="font-family: inherit; text-align: inherit"><span style="color: #000000; font-family: arial, helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">Bank Services: '+ bank + '</span>&nbsp;</div><div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f2bcb495-2bfa-4ca1-8e8d-8e201b754449.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">$'+ (package_price) +'</span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">$' + (add_serv_price) +'</span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">$'+ bank_serv_price +'</span></div><div style="font-family: inherit; text-align: inherit"><br></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 18px"><strong>Total Amount: $'+ (total) + '</strong></span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#404145" data-distribution="1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="580" style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39cf23ac-9acd-4bbf-8db6-4da01234c3ed.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 0px 0px; line-height:18px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 12px">Your account manager will be in touch to you in the next 24h (working day), via email to collect required documents and initiate the process.</span></div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 12px">Should you need any further support, you can contact by email or phone:&nbsp;</span></div><div></div></div></td></tr></tbody> </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39cf23ac-9acd-4bbf-8db6-4da01234c3ed.1.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:0px 0px 0px 0px; line-height:18px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="mailto:info@skwergroup.com?subject=&amp;body="><span style="font-size: 18px; color: #215bd7"><strong>info@skwergroup.com</strong></span></a></div><div></div></div></td></tr></tbody> </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39cf23ac-9acd-4bbf-8db6-4da01234c3ed.1.1.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:0px 0px 18px 0px; line-height:15px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 12px; color: #ffffff"><strong>+971 4 5 21 3372</strong></span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 10px 0px 10px;" bgcolor="#FFFFFF" data-distribution="1,1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e77e9fdd-2ca1-47fd-8606-12495480c9f3.2.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px"><strong>Billing Address:</strong></span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Company Address:{{c_address}}</span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Personal Address:{{p_address}}</span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f2bcb495-2bfa-4ca1-8e8d-8e201b754449.2.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px"><strong>Payment Mode:</strong></span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Stripe payment</span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#ededed" data-distribution="1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="580" style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39cf23ac-9acd-4bbf-8db6-4da01234c3ed" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 12px">Our mailing address is:</span></div><div style="font-family: inherit; text-align: center"><span style="font-size: 12px">Company Address</span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></table><!--[if mso]> </td></tr></table> </center><![endif]--> </td></tr></table> </td></tr></table> </td></tr></table> </div></center> </body> </html>';

     async function main() {
      /* SMTP config */
      const transporter = nodemailer.createTransport({
            host: 'mail.skwerzone.com' /* mail.skwergroup.com */, 
            port: 465,
            auth: {
                user: 'no-reply@skwerzone.com' /* 'no-reply@skwergroup.com' */,
                pass: '.%}qPS(NY[Q_' /* 'T(frZlmv3UFZ' */
            }
        });
      let info = await transporter.sendMail({
        from: '"Skwer Group" <no-reply@skwerzone.com>', /* '"Skwer Group" <no-reply@skwergroup.com>', */
        to: email, /* Test email address*/
        subject: "Order Summary!",
        cc: "maryann@skwergroup.com",
        text: "Thanks for your order.",
        html: email_template_3,
      });

      console.log("Message sent"); 
    }
    main().catch(console.error);

  });

});

const stripe = require("stripe")("sk_test_51LxV0VHy5jodEtzYOqTQt6pqz1eus4LRK0eyIXQcKcoq0VZHx16DpfmkbvAyl2s7pqxrfYqnOrRUGysoaqnQ5DK700HIhqt4ba", {
  apiVersion: "2022-08-01",
});

/* CONFIG STRIPE PAYMENT */
app.get("/config", (req, res) => {
  res.send({
    publishableKey: "pk_test_51LxV0VHy5jodEtzYJKTNcEC16U8FbvAjDlq7iJ5bUIhQTAYmMabixF29xPJnP6SNkYlEt3J5t7SdKqZuLtULwkLg009bSzCj2i",
  });
});

/* STRIPE PAYMENT */
app.post("/orderPay", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: req.body.dataOrder.amount,
      description: 'Payment from ' + req.body.dataOrder.fname + ' via skwergroup.com',
      automatic_payment_methods: { enabled: true },
    });

    res.send({message: paymentIntent.client_secret});
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, error => {
    if(error) throw error;

    console.log(`Server running on port: ${PORT}...`);
});