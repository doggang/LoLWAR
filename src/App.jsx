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
  const [summoner, setSummoner] = useState([]); // 소환사 정보 객체(community에 나오는 정보)
  const [settingSummoner, setSettingSummoner] = useState([]); // 소환사 정보 객체(이 state를 이용하여 ateam, bteam 밸런스 맞춤)
  const [aTeam, setATeam] = useState([0,0,0,0,0]); //추가된 소환사 A팀 정보
  const [bTeam, setBTeam] = useState([0,0,0,0,0]); //추가된 소환사 B팀 정보
  const [settingATeam, setSettingATeam] = useState([0,0,0,0,0]); //밸런스가 맞춰진 A팀 정보(pick창에 나옴)
  const [settingBTeam, setSettingBTeam] = useState([0,0,0,0,0]); //밸런스가 맞춰진 A팀 정보(pick창에 나옴)
  
  
    // 새로운 소환사 추가함수(Create)
    const onCreate = () => {
      if (sumPeople < 10) {
        setSumPeople(prevSumPeople => prevSumPeople + 1);
        const newSummoner = {
          id: idRef.current++,
          sumName: "",
          tier: 0
        };
        setSummoner(prevSummoner => [newSummoner, ...prevSummoner]);
      }
      console.log("소환사 추가");
    };
    // 소환사 정보 Pick창에 출력(Read)
    // 소환사의 티어로 내림차순
    // 이 웹사이트의 핵심 서비스 => 티어를 바탕으로 밸런스있게 짜주는 역할
    // 소환사 정보 Pick창에 출력(Read)
  // 소환사의 티어로 내림차순
  // 이 웹사이트의 핵심 서비스 => 티어를 바탕으로 밸런스있게 짜주는 역할
  const balanced = () => {
   

    // 기존 summoner 배열을 티어 포인트로 정렬
    const sortedSummoners = [...summoner].sort((a, b) => b.tier - a.tier);
  
    let newATeam = [];
    let newBTeam = [];
    let aTeamPoints = 0;
    let bTeamPoints = 0;
  
    sortedSummoners.forEach(summoner => {
      const tierValue = tierPoint[summoner.tier];
  
      // 티어 포인트의 합계가 적은 팀에 소환사를 배정
      if (newATeam.length < 5 && (aTeamPoints <= bTeamPoints || newBTeam.length >= 5)) {
        newATeam.push(summoner);
        aTeamPoints += tierValue;
      } else if (newBTeam.length < 5) {
        newBTeam.push(summoner);
        bTeamPoints += tierValue;
      }
    });
    
    // 팀 멤버가 5명이 안 되면 빈 자리 채우기
    while(newATeam.length < 5) {
      newATeam.push(0);
    }
    
    while(newBTeam.length < 5) {
      newBTeam.push(0);
    }
    
    setATeam(newATeam);
    setBTeam(newBTeam);
  };

    // 소환사 정보 입력시 State 최신화(Update)
    const onUpdate = (targetId, gameName, gameTier) => {
      setSummoner(prevSummoner =>
        prevSummoner.map(newSummoner =>
          newSummoner.id === targetId
            ? { ...newSummoner, sumName: gameName, tier: gameTier }
            : newSummoner
        )
      );
    };

    // 소환사 삭제(Delete)
    const onDelete = (targetId) => {
      setSumPeople(prevSumPeople => prevSumPeople - 1);
      setSummoner(prevSummoner =>
        prevSummoner.filter(sumInfor => targetId !== sumInfor.id)
      );
    };

    useEffect(() => {
      balanced();
    }, [summoner])

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
  // ---------------------------------------------------------------------------------------음악
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
          settingATeam={settingATeam}
          settingBTeam = {settingBTeam}
          setSettingATeam={setSettingATeam}
          setSettingBTeam={setSettingBTeam}
        />
        <Community
          summoner={summoner}
          onCreate={onCreate}
          onDelete={onDelete}
          allTier={allTier}
          sumPeople={sumPeople}
          onUpdate={onUpdate}
          balanced={balanced}
        />
      </div>
    </div>
  )
}

export default App;