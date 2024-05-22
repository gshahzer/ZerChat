import React, { useEffect, useState } from "react";
import UseConversation from "../zustand/UseConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = UseConversation();

    useEffect(() => {
        const getMessages = async () => {
          try {
              setLoading(true);
                const res = await axios(`http://localhost:3001/message/${selectedConversation._id}`);
                if (res.data.error) {
                    throw new Error(res.data.error);
                }
                setMessages(res.data);
            } catch (error) {
                setMessages([]); // Clear messages in case of error
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
};

export default useGetMessages;
