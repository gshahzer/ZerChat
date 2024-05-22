import React from 'react'

const chatSkeleton = () => {
  return (
    <div>
    <div className="flex items-start mb-4">
      <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
      <div className="flex-1">
        <div className="w-20 h-4 bg-gray-300 mb-2"></div>
        <div className="w-full h-6 bg-gray-300"></div>
      </div>
    </div>
  </div>
  )
}

export default chatSkeleton