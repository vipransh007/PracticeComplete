import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className='bg-stone-900 grid py-4 min-h-screen text-white'>
      <Todo/>
    </div>
    </>
  )
}

export default App
