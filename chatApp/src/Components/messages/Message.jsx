import React from "react";
import UseConversation from "../../zustand/UseConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractime } from "../../utils/extractime";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : " ";
  const formatedtime = extractime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatedtime}
      </div>
    </div>
  );
};

export default Message;
