import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({ id, text, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      
      {/* This div handles the toggle functionality */}
      <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick : not_tick} alt="tick-icon" className='w-7' />
        
        {/* This p tag applies a line-through style when isComplete is true */}
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
          {text}
        </p>
      </div>

      {/* This image handles the delete functionality */}
      <img onClick={() => deleteTodo(id)} src={delete_icon} alt="delete-icon" className='w-6 cursor-pointer' />
    </div>
  );
};

export default Todoitems;