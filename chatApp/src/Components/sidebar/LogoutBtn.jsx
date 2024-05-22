import React from 'react'
import {BiLogOut} from "react-icons/bi"
import { useAuthContext } from '../../context/AuthContext';
import axios from 'axios';
const LogoutBtn = () => {

  
  const { setAuthUser } = useAuthContext(); 

  const logout = async()=>{
    try {
      await axios.post("http://localhost:3001/logout");
      // const data = await res.json();
      // if(data.error){
      //   console.log(data.error)
      // }
      localStorage.removeItem("chat-user");
      setAuthUser(null)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mt-[30px]'>
        <BiLogOut className='w-6 h-6 text-black cursor-pointer' onClick={logout}/>
        </div>
  )
}

export default LogoutBtn