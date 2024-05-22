import React from 'react'
import SearchIcon from './SearchIcon'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='w-[300px] rounded-xl mx-4'>
      
        <SearchIcon/>
        <div className="divider px-3"></div>
        <Conversations/>
        <LogoutBtn/>
    </div>
  )
}

export default Sidebar