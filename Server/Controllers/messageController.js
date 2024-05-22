const Message = require("../Models/messageModel.js");
const Conversation = require("../Models/chatModel.js");
const { getReceiverSocketId, io } = require("../socket/socket.js");


const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
              });
        }
        
        const newMessage = new Message({
          senderId,
            receiverId,
            message,
        });

        if(newMessage){
          conversation.messages.push(newMessage._id);
        }
        
        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage)
          }
          
          res.status(200).json(newMessage);
        } catch (error) {
          console.error("Error sending message:", error);
          res.status(500).json({ error: 'An error occurred while sending the message.' });
        }
};


const getMessages = async (req, res) => {
    try {
      const { id: userTochatId } = req.params;
      const senderId = req.user._id;
  
      const conversation = await Conversation.findOne({
        participants: { $all: [senderId, userTochatId] },
      }).populate('messages');
  
      if (!conversation) {
        return res.status(404).json({ error: "Conversation not found" });
      }
  
      if (!conversation.messages || conversation.messages.length === 0) {
        return res.status(404).json({ error: "No messages found in the conversation" });
      }
  
      res.status(200).json(conversation.messages);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


module.exports = { getMessages, sendMessage };
