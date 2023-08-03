const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const authRouter = require("../routes/router.js");
app.use(cors({"origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"}));
app.use(express.json());


app.use("/api/", authRouter);

module.exports.handler = serverless(app);
