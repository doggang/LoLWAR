import { useState, useRef, useEffect } from 'react'
import './App.css'
import Pick from './component/Pick'
import Community from './component/Community'

function App() {

  const [name, setName] = useState("");
  const [tier, setTier] = useState("");
  const [point, setPoint] = useState("");

  return (
    <div className='app'>
      <div className='background'>
        <Pick />
        <Community />
      </div>
    </div>
  )
}

export default App
