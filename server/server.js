const express = require("express");
const app = express();
app.use(express.json());

const bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const cors = require("cors");
app.use(cors());

require("dotenv").config();

const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
            description: 'Payment from skwergroup.com',
        });
        status = 'success';
        // console.log(token);
    } catch (error) {
        console.log(error);
        status = 'failure';
    }

    res.json({ error, status });
    
});