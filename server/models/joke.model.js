const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setUp: {
    type: String,
    required: [true, "Setup is required"],
    minlength: [10, "Setup must be at least 10 characters long"],
  },
  punchLine: {
    type: String,
    required: [true, "Punch Line is required"],
    minlength: [2, "Punch Line must be at least 2 characters long"]
  }
}, {timestamps: true});

module.exports = mongoose.model("joke", JokeSchema);