import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EventEmitterExample } from './event-emitter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EventEmitterExample/>
    </>
  )
}

export default App
