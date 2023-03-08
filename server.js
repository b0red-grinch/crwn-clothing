const express = require("express");
const path = require("path");
const app = express();

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51LJLxKHat1IclGpVcawosCutK3wBSw8BZrkke5lmpihnb0QzNYAaTX8uSM0aLu6QOgJYMIND0JQCQQNlC8APkj1H00srb6smJr');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1400,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(5000, (error) => {
    if (error) throw error;
    console.log("Node server listening on port 5000!")
});