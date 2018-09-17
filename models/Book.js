var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number 
});

module.exports = mongoose.model("Book", BookSchema);
