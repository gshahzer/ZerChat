import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-7 mt-3 bg-slate-300 py-6 px-4 rounded-2xl shadow-2xl '>
        <div>
        <Link to={'/'}> 
        <img src={logo} alt="" className='w-[50px] rounded-full'/>
    
        </Link>
          
        </div>
    <div className='flex list-none gap-7'>
        <Link to={'/Login'}>
        <li>Log In</li>
        </Link>
            <Link to={'/GetStarted'}>
            <li>Get Started</li>
            </Link>
      
        </div>
    </div>
  )
}

export default Navbar