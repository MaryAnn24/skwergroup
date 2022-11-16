// const sendgrid = require('@sendgrid/mail');

// const SENDGRID_API_KEY = "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";
// const MY_SECRET_EMAIL = "";

// sendgrid.setApiKey(SENDGRID_API_KEY);
// sendgrid.send({
//     to: {
//         email: MY_SECRET_EMAIL,
//         name: 'John'
//     },
//     from: {
//         email: "maryann.baricante24@gmail.com",
//         name: "Mary"
//     },
//     templateId: 'd-2edc539b8c114d95b61dea9fbc5f3d16',
//     dynamicTemplateData: {
//         name: 'Matthew!!',
//         price: '$500'
//     }
// })
// .then(() => {
//     console.log("Email was sent");
// })

// console.log('hi');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

const msg = {
//   to: 'maryann.baricante24@gmail.com', // Change to your recipient
//   from: 'maryann@skwergroup.com', // Change to your verified sender
//   subject: 'Order Summary',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    to: {
        email: 'maryann.baricante24@gmail.com',
        name: 'John'
    },
    from: {
        email: "maryann@skwergroup.com",
        name: "Mary"
    },
    cc: 'maryann@skwergroup.com',
    subject: 'Order Summary',
    templateId: 'd-2edc539b8c114d95b61dea9fbc5f3d16',
    dynamicTemplateData: {
        name: 'Matthew!!',
        price: '$500'
    }
}

sgMail.send(msg, function (err, info) {
    if(err) {
        console.log("Email Not sent");
    } else {
        console.log("Email success");
    }
});
//   .then((response) => {
//     console.log(response[0].statusCode)
//     console.log(response[0].headers)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// const msg = {
//     to: {
//         email: req.body.email,
//         name: req.body.f_name
//     },
//     from: {
//         email: "maryann@skwergroup.com",
//         name: "Skwer Group"
//     },
//     cc: 'maryann@skwergroup.com',
//     subject: 'Order Summary',
//     templateId: 'd-2edc539b8c114d95b61dea9fbc5f3d16',
//     dynamicTemplateData: {
//         name: req.body.f_name + '!!',
//         price: req.body.package_price + req.body.add_serv_price
//     }
// }
// sgMail.send(msg, function (err, info) {
//     if(err) {
//         console.log("Email Not sent");
//     } else {
//         console.log("Email success");
//     }
// });