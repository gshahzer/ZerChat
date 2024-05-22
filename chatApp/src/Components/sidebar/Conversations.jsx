import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  console.log("conversations: ", conversations)
  return (
    <div className='bg-slate-300 h-[400px] overflow-auto rounded-xl p-4'>
       
       {conversations.map((conversation, idx) => (
         <Conversation
           key={conversation._id}
           conversation={conversation}
           lastIdx={idx === conversations.length - 1}
         />
       ))}
       
        {
          loading ? <span className='loading loading-spinner mx-auto'></span> : null }
        {/* <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/> */}
    </div>
  )
}

export default Conversations
