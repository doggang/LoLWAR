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
  
  const [mode, setMode] = useState("티어");
  const allPoint = ["1 Point","2 Point","3 Point","4 Point","5 Point","6 Point","7 Point","8 Point","9 Point","10 Point"];
  const point = [1,2,3,4,5,6,7,8,9,10];
  
  
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
  };
  // 소환사 정보 Pick창에 출력(Read)
  // 이 웹사이트의 핵심 서비스 => 티어를 바탕으로 밸런스있게 짜주는 역할
  const balanced = () => {
    // 랜덤성과 밸런스를 동시에 고려하는 알고리즘
    const sortedSummoners = [...summoner]
      .sort((a, b) => b.tier - a.tier);
  
    let attempts = 0;
    let bestTeamDiff = Infinity;
    let bestATeam = [];
    let bestBTeam = [];
  
    // 여러 번의 시도를 통해 최적의 팀 조합 찾기
    while (attempts < 50) {  // 50번의 시도로 최적해 탐색
      let candidates = [...sortedSummoners].sort(() => Math.random() - 0.5);
      
      let newATeam = [];
      let newBTeam = [];
      let aTeamPoints = 0;
      let bTeamPoints = 0;
  
      candidates.forEach(summoner => {
        const tierValue = tierPoint[summoner.tier];
  
        // 포인트 차이를 최소화하는 팀 배정 로직
        if (newATeam.length < 5 && (aTeamPoints <= bTeamPoints || newBTeam.length >= 5)) {
          newATeam.push(summoner);
          aTeamPoints += tierValue;
        } else if (newBTeam.length < 5) {
          newBTeam.push(summoner);
          bTeamPoints += tierValue;
        }
      });
  
      // 팀 포인트 차이 계산
      const teamPointDiff = Math.abs(aTeamPoints - bTeamPoints);
  
      // 더 나은 밸런스를 찾으면 최적의 팀으로 갱신
      if (teamPointDiff < bestTeamDiff) {
        bestTeamDiff = teamPointDiff;
        bestATeam = newATeam;
        bestBTeam = newBTeam;
      }
  
      // 거의 완벽한 밸런스를 찾으면 즉시 종료
      if (bestTeamDiff <= 5) break;
  
      attempts++;
    }
  
    // 팀 멤버가 5명이 안 되면 빈 자리 채우기
    while(bestATeam.length < 5) {
      bestATeam.push(0);
    }
    
    while(bestBTeam.length < 5) {
      bestBTeam.push(0);
    }
    
    setATeam(bestATeam);
    setBTeam(bestBTeam);
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio('./bgm.mp3');
    newAudio.loop = true;
    setAudio(newAudio);

    return () => {
      newAudio.pause();
      newAudio.currentTime = 0;
    };
  }, []);

  // 음악 토글 함수
  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  // ---------------------------------------------------------------------------------------음악
  
  const modeChange=(e)=>{
    setMode(e.target.value);
  }
  
  useEffect(()=>{
    console.log(mode);
  },[mode]);

  return (
    <div className='app'>
      <div className='background'>
      <button id="musicToggle"onClick={toggleMusic}>
          {isPlaying ? '🔊 음악 끄기' : '🔇 음악 켜기'}
        </button>
        {
          ((ex) => {
          let result;
          if(mode==="티어"){
            result = <>
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
          </>
          
          } else if(mode==="포인트") {
            result = <>
            <Pick 
              summoner={summoner}
              sumPeople={sumPeople}
              aTeam={aTeam}
              bTeam={bTeam}
              balanced={balanced}
              allTier={allPoint}
              tierPoint={point}
              settingATeam={settingATeam}
              settingBTeam = {settingBTeam}
              setSettingATeam={setSettingATeam}
              setSettingBTeam={setSettingBTeam}
            />
            <Community
              summoner={summoner}
              onCreate={onCreate}
              onDelete={onDelete}
              allTier={allPoint}
              sumPeople={sumPeople}
              onUpdate={onUpdate}
              balanced={balanced}
            />
          </>
          }
          return result;
          })()
        }
        
        <select id="mode" type="text" onChange={modeChange}>
          <option value="티어">티어</option>
          <option value="포인트">포인트</option>
        </select>
      </div>
    </div>
  )
}

export default App;