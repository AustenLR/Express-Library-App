var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
                   title: String,
                   actors: String,
                   genre: String,
                   year: Number,
                   plot: String
                  });


var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;