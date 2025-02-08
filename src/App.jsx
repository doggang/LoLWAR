import { useState, useRef, useEffect } from 'react'
import './App.css'
import Pick from './component/Pick'
import Community from './component/Community'

function App() {

  const [sumCount, setSumCount] = useState(0);
  const [sumArr, setSumArr] = useState([]);
  const [name, setName] = useState("");
  const [tier, setTier] = useState("");
  const [point, setPoint] = useState("");

  const allTier = ["iron4", "iron3", "iron2", "iron1", "bronze4", "bronze3", "bronze2", "bronze1", "silver4", "silver3", "silver2", "silver1", "gold4", "gold3", "gold2", "gold1", "platinum4", "platinum3", "platinum2", "platinum1", "emerald4", "emerald3","emerald2", "emerald1", "diamond4", "diamond3", "diamond2", "diamond1", "master0-149", "master150-299", "master300-449", "master450-599", "master600-749", "master750-899", "master900over", ];
  const tierPoint = [1,2,3,4, 5,6,7,8, 9,11,13,15,17,18,19,21,22,23,24,26,28,30,34,37,40,43,46,48,50,52,54];
  

  return (
    <div className='app'>
      <div className='background'>
        <Pick />
        <Community sumArr={sumArr} setSumArr={setSumArr} sumCount={sumCount} setSumCount={setSumCount} name={name} setName={setName}
        allTier={allTier} tierPoint={tierPoint}/>
      </div>
    </div>
  )
}

export default App
