const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedBooksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  link: String,
  thumbnail: String,
  date: { type: Date, default: Date.now }
});

const savedBooks = mongoose.model("savedBooks", savedBooksSchema);

module.exports = savedBooks;
