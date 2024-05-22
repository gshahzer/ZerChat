import { create } from 'zustand';

const UseConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }), // Corrected setter function
}));

export default UseConversation;
