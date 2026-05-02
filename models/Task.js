const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  projectId: {
    type: String
  },
  assignedTo: {
    type: String
  },
  status: {
    type: String,
    enum: ["Todo", "In Progress", "Done"],
    default: "Todo"
  },
  dueDate: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);