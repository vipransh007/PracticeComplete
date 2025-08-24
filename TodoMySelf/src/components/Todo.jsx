
import { useRef, useState } from 'react'
import Todolistitems from './Todolistitems'


const Todo = () => {
  
  const inputref = useRef(null);
  const [todo, SetTodo] = useState([]);

const add = () =>{
  const inputText = inputref.current.value.trim();
  console.log(inputText);

  if(inputText == "") return

  const newTodo ={
    id : Date.now(),
    text : inputText,
    isCompleted : false
  }
  SetTodo((prev) => [...prev, newTodo]);
  inputref.current.value = ""
}


const toggle = (id) => {
  SetTodo((prev) => {
    return prev.map((item) => {
      if(item.id === id){
        return {...item , isCompleted:!item.isCompleted}
      }
      return item
    })
  })
}


const deleteTodo = (id) => {
  SetTodo((prev) =>{
   return prev.filter((todo) => todo.id !== id)
  })
}


  return (
    <div className='bg-white text-black w-auto h-auto mx-auto rounded-xl flex flex-col p-7 min-h-[550px]'>
      <div className='flex item-center mt-8 gap-2'>
        <h1 className='text-3xl font-semibold'>Todo List By Vipransh</h1>
      </div>

          <div className='flex item-center bg-gray-300 mt-5 rounded-full p-1' >
            <input ref={inputref} className = 'bg-transparent border-0 outline-none flex-1 h-14 w-20 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='add your task' />
            <button onClick={add} className='border-none bg-orange-600 text-white rounded-full w-20 font-medium text-lg cursor-pointer'>ADD +</button>
          </div>

        {/* Todo Items  */}
          <div>
            {/* <Todolistitems text="cute but uses profanity"/>
            <Todolistitems text="cute but uses profanity"/> */}

              {todo.map((item) => {
                return <Todolistitems
                key = {item.id}
                id = {item.id}
                text = {item.text}
                isCompleted = {item.isCompleted}
                deleteTodo = {deleteTodo}
                toggle={toggle} 

                 />
              })}
          </div>
      </div>
  )
}

export default Todo