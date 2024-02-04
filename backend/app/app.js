require("../config/db");
const cors = require("cors");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());
const songsRouter = require("./router/songRouter");
app.use("/api/songs/", songsRouter);
module.exports = app;