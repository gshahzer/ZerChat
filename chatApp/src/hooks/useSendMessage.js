import React, { useState } from "react";
import UseConversation from "../zustand/UseConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = UseConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:3001/message/send/${selectedConversation._id}`,
        { message } // Pass the message in the request body
      );
      const data = res.data;
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {sendMessage, loading} ; // Return loading state and sendMessage function
};

export default useSendMessage;
