import { useState } from 'react'
import './App.css'
import Chats from './component/chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chats/>
    </>
  )
}

export default App
