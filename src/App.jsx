import { useState, useRef} from 'react'
import './App.css'
import Pick from './component/Pick'
import Community from './component/Community'

function App() {

 

  const allTier = ["iron4", "iron3", "iron2", "iron1", "bronze4", "bronze3", "bronze2", "bronze1", "silver4", "silver3", "silver2", "silver1", "gold4", "gold3", "gold2", "gold1", "platinum4", "platinum3", "platinum2", "platinum1", "emerald4", "emerald3","emerald2", "emerald1", "diamond4", "diamond3", "diamond2", "diamond1", "master0-149", "master150-299", "master300-449", "master450-599", "master600-749", "master750-899", "master900over", ];
  const tierPoint = [1,2,3,4, 5,6,7,8, 9,10,11,12, 13,15,16,17 ,17,18,19,21 ,22,23,24,26 ,28,30,34,37 ,40,43,46,48, 50,52,54];
  
  
  const idRef = useRef(0); // 각 Summoner의 id
  const [sumPeople, setSumPeople] = useState(0); //community 창 속 소환사의 수
  const [summoner, setSummoner] = useState([]); // 소환사 정보 객체

    // 새로운 소환사 추가함수(Create)
  const onCreate = ()=>{
    if(sumPeople<10){
      setSumPeople(sumPeople+1);
      const newSummoner={
        id:idRef.current++,
        sumName:"",
        tier:""
      };
    setSummoner([newSummoner, ...summoner])
    console.log(summoner);
  }
  };
    // 소환사 정보 입력시 State 최신화(Update)
    const onUpdate = (targetId, gameName, gameTier)=>{
      setSummoner(summoner.map((newSummoner)=>(newSummoner.id === targetId)? {...newSummoner, sumName:gameName, tier:gameTier}:newSummoner));
    }

    // 소환사 삭제(Delete)
  const onDelete = (targetId)=>{
    setSumPeople(sumPeople-1);
    setSummoner(
      summoner.filter((sumInfor)=>targetId!==sumInfor.id)
    )
  }

  return (
    <div className='app'>
      <div className='background'>
        <Pick 
          summoner={summoner}
        />
        <Community
          summoner={summoner}
          onCreate={onCreate}
          onDelete={onDelete}
          allTier={allTier}
          onUpdate={onUpdate}
          sumPeople={sumPeople}
        />
      </div>
    </div>
  )
}

export default App;