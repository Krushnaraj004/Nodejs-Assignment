//Create server through Express
const express = require("express");
//const mongoose = require('mongoose');
const app = express();
//const { BookModel } = require("./BookSchema"); //filename
const BookRoutes=require("./module/routes/routes");
const mongoconnect=require("../../mongodb/link");
app.use(express.json());

app.use(BookRoutes);

app.listen(8080, function() {
    console.log("server is up on port 8080");
});
