import { useState, useRef, useEffect} from 'react'
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
}
    // 소환사 정보 Pick창에 출력(Read)
  const onRead = ()=>{
    summoner.map((newSummoner, index)=>{
      return (
        <div key={index}>
          <div>{newSummoner.sumName}</div>
          <div>{newSummoner.tier}</div>
        </div>

      )
    })
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

  // ---------------------------------------------------------------------------------------음악
  useEffect(() => {
    const audio = new Audio();
    audio.src = './bgm.mp3';  // public 폴더의 파일을 직접 참조
    audio.loop = true;
  
    const playAudio = async () => {
      try {
        await audio.play();
        console.log("음악 재생 시작");
      } catch (err) {
        console.error("음악 재생 실패:", err);
      }
    };
  
    // 페이지 로드 후 사용자 상호작용이 있을 때 음악 재생
    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleUserInteraction);
    };
  
    // 첫 번째 클릭 이벤트로 음악 재생
    document.addEventListener('click', handleUserInteraction);
  
    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);
  // ---------------------------------------------------------------------------------------음악악
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