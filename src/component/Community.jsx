import { useState, useRef, useEffect } from 'react'

import Summoner from "./Summoner";

const Community = ({sumCount,setSumCount,name,setName,allTier, tierPoint})=>{

  const [sumState, setSumState] = useState([]);

  const onClickAdd = ()=>{
    if(sumCount<10){
      setSumCount(sumCount+1);
      setSumState([...sumState, <Summoner allTier={allTier} tierPoint={tierPoint}></Summoner>]);
    }
      
  }

  
  return(
    <community id="community">
      <div id="comTitle">
        <div id="comTitleImg" />
        <div id="comTitleStateCover">
          <div id="comTitleName">말년중위 김도현</div>
          <div id="comTitleState">●  온라인</div>
        </div>
      </div>
      <div>
        <div className="communityTab">
          <div>일반 ({sumCount}/10)</div>
          {
          sumCount==10 ? null : <button id="addBtn" onClick={onClickAdd}>소환사 추가</button>
        }
        </div>
        
        {sumState}
        
      </div>
    </community>
  );
}

export default Community;