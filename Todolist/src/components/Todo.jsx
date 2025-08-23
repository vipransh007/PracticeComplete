import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'
import { useEffect } from 'react'



const Todo = () => {

const inputref = React.useRef(null);
const [todoList, setTodoList] = React.useState([]);

const add = () => {
  const inputText = inputref.current.value.trim();

  if(inputText === "") return null;

  const newTodo ={
    id: Date.now(),
    text: inputText,
    isComplete: false,
  }
  setTodoList((prev) => [...prev,newTodo]);
  inputref.current.value = "";
}

const toggle = (id) => {
  setTodoList((prevTodos) => {
    return prevTodos.map((todo) => {
      if(todo.id === id) {
        return {...todo, isComplete: !todo.isComplete};
      }
      return todo;
    });
  })
}

const deleteTodo = (id) => {
  setTodoList((prev) =>{
   return prev.filter((todo) => todo.id !== id)
  })
}

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoList));
  console.log(todoList);
}, [todoList])



  return (
    <div className='bg-white text-black w-auto h-auto mx-auto rounded-xl flex flex-col p-7 min-h-[550px]'>
      
    {/* =========title========== */}

    <div className="flex items-center mt-8 gap-2">
      <img  className='w-8' src={todo_icon} alt="" />
      <h1 className='text-3xl font-semibold'>TODO List by Vipransh</h1>
    </div>

    {/* =========form========== */}

    <div className='flex item-center my-7 bg-gray-200 rounded-full'>
      <input ref={inputref} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='add your task' />
      <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
    </div>


    {/* =========task list========== */}
      
      {/* =========task list========== */}


<div>
  {todoList.map((item) => { // 'index' parameter removed as it's not needed
    return <Todoitems 
      key={item.id} // Changed from 'index' to the unique 'item.id'
      text={item.text} 
      id={item.id} 
      isComplete={item.isComplete}
      deleteTodo={deleteTodo}
      toggle={toggle} 
    />
  })}
</div>
    </div>
  )
}

export default Todo
