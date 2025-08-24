import React from 'react'

const Todolistitems = ({ id, text, isCompleted, deleteTodo, toggle }) => {
  return (
    <div className='flex justify-between items-center bg-orange-100 p-1 rounded-full mt-4'>
      
      {/* 1. The text for the to-do item */}
      <span 
        onClick={() => toggle(id)} 
        className= {`text-black text-lg ml-1 mr-2 cursor-pointer ${isCompleted ? "line-through" : ""}`}
      >
        {text}
      </span>

      {/* 2. The delete button */}
      <button 
        onClick={() => deleteTodo(id)} 
        className='bg-orange-600 text-white rounded-full py-2 px-1.5 cursor-pointer hover:bg-orange-700'
      >
        Delete
      </button>

    </div>
  )
}

export default Todolistitems