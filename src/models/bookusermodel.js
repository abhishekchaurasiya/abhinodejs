const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    bookname: String,
    authorname: String,
    category: String,
    year: Date,
}, { timestamps: true });


let bookUserSchema = mongoose.model("books", userSchema);
module.exports = bookUserSchema;