const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const authRouter = require("../routes/router.js");
app.use(cors({ origin: 'https://64cbf68cc54e7f11de5b5917--amazonllone.netlify.app' }));
app.use(express.json());


app.use("/api/", authRouter);

module.exports.handler = serverless(app);
