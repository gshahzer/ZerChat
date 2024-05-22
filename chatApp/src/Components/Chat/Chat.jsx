
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MessageContainer from '../messages/MessageContainer'

const Chat = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Chat
