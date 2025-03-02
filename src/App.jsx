import { useState, useRef, useEffect} from 'react'
import './App.css'
import Pick from './component/Pick'
import Community from './component/Community'

function App() {

 // 

  const allTier = 
  [
    "아이언 IV", "아이언 III", "아이언 II", "아이언 I", 
    "브론즈 IV", "브론즈 III", "브론즈 II", "브론즈 I", 
    "실버 IV", "실버 III", "실버 II", "실버 I", 
    "골드 IV", "골드 III", "골드 II", "골드 I", 
    "플래티넘 IV", "플래티넘 III", "플래티넘 II", "플래티넘 I", 
    "에메랄드 IV", "에메랄드 III","에메랄드 II", "에메랄드 I", 
    "다이아몬드 IV", "다이아몬드 III", "다이아몬드 II", "다이아몬드 I", 
    "마스터 0-149", "마스터 150-299", "마스터 300-449", "마스터 450-599", "마스터 600-749", "마스터 750-899", "마스터 900이상"
  ];
  const tierPoint = [1,2,3,4, 5,6,7,8, 9,10,11,12, 13,15,16,17 ,17,18,19,21 ,22,23,24,26 ,28,30,34,37 ,40,43,46,48, 50,52,54];
  
  
  const idRef = useRef(0); // 각 Summoner의 id
  const [sumPeople, setSumPeople] = useState(0); //community 창 속 소환사의 수
  const [summoner, setSummoner] = useState([]); // 소환사 정보 객체
  const [aTeam, setATeam] = useState([0,0,0,0,0]);
  const [bTeam, setBTeam] = useState([0,0,0,0,0]);

    // 새로운 소환사 추가함수(Create)
  const onCreate = ()=>{
    if(sumPeople<10){
      setSumPeople(sumPeople+1);
      const newSummoner={
        id:idRef.current++,
        sumName:"",
        tier:1
      };
    setSummoner([newSummoner, ...summoner])
  }
}
    // 소환사 정보 Pick창에 출력(Read)
    // 소환사의 티어로 내림차순
    // 이 웹사이트의 핵심 서비스 => 티어를 바탕으로 밸런스있게 짜주는 역할
  const balanced = ()=>{
    setSummoner(prevSummoners => [...prevSummoners].sort((a, b) => b.tier - a.tier));
    let newATeam = [];
    let newBTeam = [];
    for(let i=0; i<summoner.length; i++){
      if(i%2 === 0){
        newATeam.push(summoner[i]);
      }else{
        newBTeam.push(summoner[i]);
      }
    }
    if(newATeam.length!==5){
      for(let i=newATeam.length; i<5; i++){
        newATeam.push(0);
      }
    }
    if(newBTeam.length!==5){
      for(let i=newBTeam.length; i<5; i++){
        newBTeam.push(0);
      }
    }
    setATeam(newATeam);
    setBTeam(newBTeam);

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
          sumPeople={sumPeople}
          aTeam={aTeam}
          bTeam={bTeam}
          balanced={balanced}
          allTier={allTier}
          tierPoint={tierPoint}
        />
        <Community
          summoner={summoner}
          onCreate={onCreate}
          onDelete={onDelete}
          allTier={allTier}
          sumPeople={sumPeople}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  )
}

export default App;