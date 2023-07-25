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

    app.get("/notes/list/:userid", async function (req, res) {
        var notes = await Note.find({ userid: req.params.userid });
        res.json(notes);
    });

    app.post("/notes/add", async function (req, res) {
        await Note.deleteOne({ id: req.body.id });
        const newNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content,
        });
        await newNote.save();
        const response = { message: "New note created!" + ` id: ${req.body.id}` };
        res.json(response);
        
    });
});

// Starting the server on port 5000
app.listen(5000, function () {
    console.log("Server started at port: 5000");
});
