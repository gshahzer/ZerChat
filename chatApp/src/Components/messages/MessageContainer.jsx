import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { FaRegCommentDots } from 'react-icons/fa';
import useConversation from '../../zustand/UseConversation'; // Correct import

const MessageContainer = () => {
   
    const { selectedConversation, setSelectedConversation } = useConversation(); // Correct function name
   
    useEffect(() => {
        // Reset selected conversation when component unmounts
        return () => setSelectedConversation(null);
    }, []); // Em

    return (
        <div className='flex flex-col w-[1000px] h-[600px] bg-slate-200 rounded-lg shadow-lg'>
            {!selectedConversation ? (
                <NoChatSelectedMessage />
            ) : (
                <>
                    {/* Header */}
                    <div className='bg-gray-200 px-4 py-2 mb-2 rounded-t-lg'>
                        <span className='text-gray-800 font-semibold'>To:</span>
                        <span className='text-gray-700 font-medium ml-1'>{selectedConversation.fullname}</span>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4">
                        <Messages />
                    </div>

                    {/* Message Input */}
                    <div className="py-2 px-4">
                        <MessageInput />
                    </div>
                </>
            )}
        </div>
    );
}

const NoChatSelectedMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <FaRegCommentDots className="text-gray-400 text-4xl mb-4" />
            <p className="text-gray-600 mb-2 text-lg">No chat selected</p>
            <p className="text-gray-400 text-sm">Please select a chat to start messaging</p>
        </div>
    );
}

export default MessageContainer;
