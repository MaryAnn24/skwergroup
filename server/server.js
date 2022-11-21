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


// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey("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");

/* DATABASE CONNECTIVITY */

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DB_HOST,
    password: "",
    database: process.env.DB_NAME
});

const nodemailer = require("nodemailer"); // Require the Nodemailer package

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
    const add_serv = (req.body.add_serv).toString();
    const salutation = req.body.salutation;
    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const email = req.body.email;
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
        "INSERT INTO tbl_registration (or_no, jurisdiction, c_name1, type_1, c_name2, type_2, c_name3, type_3, package, add_serv, salutation, f_name, l_name, email, p_street, p_city, p_state, p_zip, p_country, contact_no, package_price, add_serv_price, regis_remarks, payment_remarks, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [or_no, jurisdiction, c_name1, type_1, c_name2, type_2, c_name3, type_3, skwer_package, add_serv, salutation,
        f_name, l_name, email, p_street, p_city, p_state, p_zip, p_country, contact_no, package_price, 
        add_serv_price, regis_remarks, payment_remarks, dateCreated, dateUpdated],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
    );

    // const skwer_package = "Premium";
    // const add_serv = "Additional Services";
    // const pack_price = 1500;
    // const add_price = 700;
    const total = package_price + add_serv_price;
    const p_address = p_street + ' ' + p_city + ' ' + p_state + ', ' + p_country + ' (' + p_zip + ')';

    /*var email_temp = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><p style="color:blue">'+ order_no +'</p></body></html>';*/
    
    var email_template_2 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"> <meta http-equiv="X-UA-Compatible" content="IE=Edge"> <style type="text/css"> body, p, div{font-family: arial,helvetica,sans-serif; font-size: 14px;}body{color: #000000;}body a{color: #1188E6; text-decoration: none;}p{margin: 0; padding: 0;}table.wrapper{width:100% !important; table-layout: fixed; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}img.max-width{max-width: 100% !important;}.column.of-2{width: 50%;}.column.of-3{width: 33.333%;}.column.of-4{width: 25%;}ul ul ul ul{list-style-type: disc !important;}ol ol{list-style-type: lower-roman !important;}ol ol ol{list-style-type: lower-latin !important;}ol ol ol ol{list-style-type: decimal !important;}@media screen and (max-width:480px){.preheader .rightColumnContent, .footer .rightColumnContent{text-align: left !important;}.preheader .rightColumnContent div, .preheader .rightColumnContent span, .footer .rightColumnContent div, .footer .rightColumnContent span{text-align: left !important;}.preheader .rightColumnContent, .preheader .leftColumnContent{font-size: 80% !important; padding: 5px 0;}table.wrapper-mobile{width: 100% !important; table-layout: fixed;}img.max-width{height: auto !important; max-width: 100% !important;}a.bulletproof-button{display: block !important; width: auto !important; font-size: 80%; padding-left: 0 !important; padding-right: 0 !important;}.columns{width: 100% !important;}.column{display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important;}.social-icon-column{display: inline-block !important;}}</style> <style>@media screen and (max-width:480px){table\0{width: 480px !important;}}</style> </head> <body> <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FBFBFB;"> <div class="webkit"> <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FBFBFB"> <tr> <td valign="top" bgcolor="#FBFBFB" width="100%"> <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0"> <tr> <td width="100%"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <td><!--[if mso]> <center> <table><tr><td width="600"><![endif]--> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center"> <tr> <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#ffffff" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;"> <tr> <td role="module-content"> <p></p></td></tr></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#154dc6" data-distribution="1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="600" style="width:600px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="1b4a2073-679e-471e-b2ae-fae30ae5d218"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:30px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:20% !important; width:20%; height:auto !important;" width="120" alt="SKWER GROUP LOGO" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/4297894fb08afbbc/ef9b210d-38a1-4ba8-97c2-74512a317635/1541x1066.png"> </td></tr></tbody> </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b5ec1f4d-9c37-472b-98ee-6614abfbb7c3"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:25% !important; width:25%; height:auto !important;" width="NaN" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/4297894fb08afbbc/35eab510-ef89-418b-9ac1-acd1eb80f4d0/512x512.png"> </td></tr></tbody> </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ba5d5bdf-956a-41d6-9388-62e2d3779c17.2" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #ffffff; font-size: 24px"><strong>THANKS FOR YOUR ORDER!!!</strong></span></div><div style="font-family: inherit; text-align: center"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(21, 77, 198); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline; color: #ffffff">Your order number:'+ or_no +'</span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#000000" data-distribution="1,1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="290" style="width:290px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e77e9fdd-2ca1-47fd-8606-12495480c9f3" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:5px 0px 5px 10px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px; color: #ffffff"><strong>Order Summary</strong></span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table><table width="290" style="width:290px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f2bcb495-2bfa-4ca1-8e8d-8e201b754449" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:5px 10px 5px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px; color: #ffffff"><strong>Price</strong></span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 10px 0px 10px;" bgcolor="#FFFFFF" data-distribution="1,1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e77e9fdd-2ca1-47fd-8606-12495480c9f3.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Package:'+ skwer_package +'</span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Additional Services:' + add_serv + '</span></div><div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f2bcb495-2bfa-4ca1-8e8d-8e201b754449.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">$'+ (package_price).toLocaleString(undefined, {minimumFractionDigits:2}) +'</span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">$' + (add_serv_price).toLocaleString(undefined, {minimumFractionDigits:2}) +'</span></div><div style="font-family: inherit; text-align: inherit"><br></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 18px"><strong>Total Amount: $'+ (total).toLocaleString(undefined, {minimumFractionDigits:2}) + '</strong></span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#154DC6" data-distribution="1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="580" style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39cf23ac-9acd-4bbf-8db6-4da01234c3ed.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 0px 0px; line-height:18px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 12px">Your account manager will be in touch to you in the next 24h (working day), via email to collect required documents and initiate the process.</span></div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 12px">Should you need any further support, you can contact by email or phone:&nbsp;</span></div><div></div></div></td></tr></tbody> </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39cf23ac-9acd-4bbf-8db6-4da01234c3ed.1.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:0px 0px 0px 0px; line-height:18px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><a href="mailto:info@skwergroup.com?subject=&amp;body="><span style="font-size: 12px; color: #71d958"><strong>info@skwergroup.com</strong></span></a></div><div></div></div></td></tr></tbody> </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39cf23ac-9acd-4bbf-8db6-4da01234c3ed.1.1.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:0px 0px 18px 0px; line-height:15px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 12px; color: #ffffff"><strong>+971 4 5 21 3372</strong></span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 10px 0px 10px;" bgcolor="#FFFFFF" data-distribution="1,1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e77e9fdd-2ca1-47fd-8606-12495480c9f3.2.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px"><strong>Billing Address:</strong></span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Personal Address:'+ p_address +'</span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table><table width="280" style="width:280px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f2bcb495-2bfa-4ca1-8e8d-8e201b754449.2.1" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px"><strong>Payment Mode:</strong></span></div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 12px">Stripe payment</span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#ededed" data-distribution="1"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="580" style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39cf23ac-9acd-4bbf-8db6-4da01234c3ed" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 12px">Our mailing address is:</span></div><div style="font-family: inherit; text-align: center"><span style="font-size: 12px">Company Address</span></div><div></div></div></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></tbody> </table></td></tr></table><!--[if mso]> </td></tr></table> </center><![endif]--> </td></tr></table> </td></tr></table> </td></tr></table> </div></center> </body> </html>';

    async function main() {
        // SMTP config
        const transporter = nodemailer.createTransport({
              host: 'mail.skwerzone.com' /* mail.skwergroup.com */, 
              port: 465,
              auth: {
                  user: 'no-reply@skwerzone.com' /* 'no-reply@skwergroup.com' */,
                  pass: 'VI$,UO;lk~(7' /* 'T(frZlmv3UFZ' */
              }
          });
        let info = await transporter.sendMail({
          from: '"Skwer Group" <no-reply@skwerzone.com>', /* '"Skwer Group" <no-reply@skwergroup.com>', */
          to: "maryann.baricante24@gmail.com", // Test email address
          subject: "Order Summary!",
          cc: "maryann@skwergroup.com",
          text: "Thanks for your order.",
          html: email_template_2,
        });
        console.log("Message sent: %s", info.messageId); // Output message ID
      }
      // Catch any errors and output them to the console
    main().catch(console.error);
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
            description: 'Payment from' + f_name +' '+ l_name + ' via skwergroup.com',
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