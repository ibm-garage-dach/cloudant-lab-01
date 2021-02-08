const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');


app.use("/static", express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use('/', routes);

app.listen(PORT, () => console.log("Server Up and running on port: " + PORT));