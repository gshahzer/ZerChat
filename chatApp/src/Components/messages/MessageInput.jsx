import React, { useState } from "react";
import { TiAttachment } from "react-icons/ti";
import { FaPaperPlane } from "react-icons/fa";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex items-center border-t border-gray-300 p-4">
      <form className="flex-1 flex items-center" onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-100 rounded-full py-2 px-4 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
          <TiAttachment className="text-gray-600" />
        </button>
        <button
          type="submit"
          className="ml-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          {loading ? (
            <div
              className="loading loading-spinner" 
              style={{ width: "24px", height: "24px", marginRight: "2px" }}
            />
          ) : (
            <FaPaperPlane className="text-gray-600" />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
