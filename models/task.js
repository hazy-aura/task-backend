const mongoose = require("mongoose");
const { type } = require("os");

const taskSchema = mongoose.Schema;

const Task = new taskSchema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
    },
    assignedTo: {
      type: string,
    },
    dueDate: {
      type: Date,
    },
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", Task);
