const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const authRouter = require("../routes/router.js");
app.use(cors());
app.use(express.json());


app.use("/api/", authRouter);

module.exports.handler = serverless(app);