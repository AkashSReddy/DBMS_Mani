var mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);

const carSchema = mongoose.Schema({
  brand: String,
  name: [String],
  image: [String],
  Price1: String,
  Price2: String,
  Price3: String
});

module.exports = mongoose.model("Car", carSchema);
