const express = require("express");
const app = express();
app.use(express.json());

const bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const cors = require("cors");
app.use(cors());

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
    const { amount, fullname } = req.body;
    console.log(fullname);
    const amt = 242000;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: 99,
      description: "amount",
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.post('/create-payment-intent2',(req, res) => {
  let data = {hello: req.body.hello};
  console.log(data);
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});

// app.post('/payment', async(req, res) => {
//     let status, error;

//     const { token, amount, name } = req.body;

//     try {
//         await Stripe.charges.create({
//             source: token.id,
//             amount,
//             currency: 'usd',
//             description: 'Payment from ' + name + ' via skwergroup.com',
//         });
//         status = 'success';
//         /* console.log(token); */
        
//     } catch (error) {
//         console.log(error);
//         status = 'failure';
//     }

//     res.json({ error, status });
    
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, error => {
    if(error) throw error;

    console.log(`Server running on port: ${PORT}...`);
});
