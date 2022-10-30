const express = require('express');
const app = express();
const Stripe = require('stripe');

const router = express.Router();


const stripe = Stripe("sk_test_51LxV0VHy5jodEtzYOqTQt6pqz1eus4LRK0eyIXQcKcoq0VZHx16DpfmkbvAyl2s7pqxrfYqnOrRUGysoaqnQ5DK700HIhqt4ba");
router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.send({ url: session.url });
});

module.exports = router;