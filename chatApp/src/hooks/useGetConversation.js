import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

// Set Axios defaults for credentials
axios.defaults.withCredentials = true;  
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
        const res = await axios.get("http://localhost:3001/users", {
          headers: {
            Authorization: `Bearer ${token}` // Include token in Authorization header
          }
        });
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();

  }, []);

  return { loading, conversations };
};

export default useGetConversation;
