const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const authRouter = require("../routes/router.js");
// app.use(cors({"origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (*)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());


app.use("/api/", authRouter);

module.exports.handler = serverless(app);
