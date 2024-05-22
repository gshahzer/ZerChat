const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "users",
      },
    ],

    messages: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Message", // Correct reference to the "message" model
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("chat", chatSchema);

module.exports = ChatModel;
