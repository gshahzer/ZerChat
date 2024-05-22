import React from "react";
import UseConversation from "../../zustand/UseConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = UseConversation();

  const handleClick = () => {
    setSelectedConversation(conversation);
  };

  const isSelected = selectedConversation?._id === conversation._id;
  
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
  
    
  return (
    <div className={`mt-2 ${isSelected ? 'bg-gray-200' : ''}`}>
      {/* Left Side - Chat List */}
      <div>
        <div className="flex flex-col space-y-2">
          <div 
            className={`flex items-center bg-white rounded-lg p-3 cursor-pointer hover:bg-gray-200 ${isSelected ? 'bg-slate-500' : ''}`}
            onClick={handleClick}
          >
            {/* Green dot to indicate online status */}
           <div className= {`avatar ${isOnline? "online" : ""}`}>

            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold">
              {/* Access conversation object and display initials */}
              <div className="text-center items-center flex justify-center text-3xl">
              {conversation.fullname && conversation.fullname.charAt(0)}

              </div>
            </div>
           </div>
            <div className="ml-3">
              {/* Display conversation fullname */}
              {conversation.fullname}
            </div>
          </div>
        </div>
      </div>
      {/* Check if it's not the last index to display the divider */}
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </div>
  );
};

export default Conversation;
