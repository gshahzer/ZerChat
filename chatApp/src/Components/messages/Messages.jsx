import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import ChatSkeleton from '../../skeleton/ChatSkeleton';
import uselistenerMessage from '../../hooks/uselistenerMessage';

const Messages = () => {
  const { messages, loading, error } = useGetMessages();
  uselistenerMessage();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the container when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='px-3 flex-1 overflow-auto'>
      {error && <p className='text-center text-red-500'>Error: {error.message}</p>}
      {!loading && messages.length > 0 && messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
      {loading && [...Array(2)].map((_, idx) => <ChatSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center text-xl text-black'>Send a Message to start conversation</p>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
