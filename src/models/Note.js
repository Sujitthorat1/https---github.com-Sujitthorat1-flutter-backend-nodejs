const  mongoose  = require("mongoose");

//this scema is for noteApp
const noteSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
     
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
});

module.exports =  mongoose.model("Note", noteSchema)