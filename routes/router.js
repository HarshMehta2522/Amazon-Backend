const express = require("express");
const router = express.Router();
router.get("/health-check", (req, res) => {
  res.send("Working").status(200);
});

router.post("/payment/create", async (req, response) => {
  console.log(req.body);
  const total = req.body.amount;
  console.log("payment", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(total, 10),
    currency: "inr",
  });
  console.log(paymentIntent.client_secret);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
module.exports = router;
