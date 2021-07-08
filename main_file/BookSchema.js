const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    BookName: {
        type: String,
        unique: true,
    },
    Price: {
        type: Number,
    },
    Author: {
        type: String,
    },
    Language: {
        type: String,
    },
    AboutAuthor: {
        type: String,
    },

});
//we have to perform CRUD Operation
const BookModel = mongoose.model("BookModel", BookSchema);
module.exports = { BookModel };