import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 class="text-9xl">Todo List</h1>
        <p>Time created</p>
        <p>Time alloted</p>
        <p>time remaining</p>
        <p>progress</p>
      </div>
    </>
  )
}

export default App
