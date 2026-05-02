const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdBy: {
    type: String
  },
  members: [
    {
      type: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);