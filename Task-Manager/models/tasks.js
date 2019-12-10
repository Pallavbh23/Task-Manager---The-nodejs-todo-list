const mongoose = require("mongoose");

// creating the schema for tasks
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  // date is optional.
  date: {
    type: String
  },
  type: {
    type: String,
    required: true
  }
});

//exporting the schema.
const task = mongoose.model("task", taskSchema);
module.exports = task;
