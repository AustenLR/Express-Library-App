var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
                   title: String,
                   genre: String,
                   year: Number
                  });


var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;