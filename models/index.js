var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movies_app");

module.exports.Movie = require("./book");