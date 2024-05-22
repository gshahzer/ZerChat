import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast package
import UseConversation from '../../zustand/UseConversation';
import useGetConversation from '../../hooks/useGetConversation';

const SearchIcon = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = UseConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      
      <div className="flex items-center justify-between border border-gray-300 rounded-lg overflow-hidden w-[300px]">
        <input
          className='focus:outline-none px-2'
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="bg-slate-400 hover:bg-slate-500 text-white px-4 py-2">
          <RiSearchLine />
        </button>
      </div>
    </form>
  );
};

export default SearchIcon;
