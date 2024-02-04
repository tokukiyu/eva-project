require("../config/db");
require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());
const songsRouter = require("./routers/songRoutes");
app.use("/songs/", songsRouter);
module.exports = app;
