// Initialization
const express = require("express");
const app = express();
const uri = "mongodb+srv://sujitthorat:sujitthorat@cluster0.hxrauiy.mongodb.net/notes";
const mongoose = require("mongoose");

const Note = require("./models/Note");

//body parse
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(uri).then(function () {
    // App Route
    app.get("/", function (req, res) {
        res.send("this is your home page !");
    });

    const noteRouter = require('./routes/Note')
    app.use('/notes', noteRouter)
});

// Starting the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server started at port: "+PORT);
});
