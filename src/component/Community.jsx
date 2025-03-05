import { useState,useRef } from "react";
import Summoner from '../component/Summoner';
import '../style/Community.css';

const Community = ({onCreate, onDelete, onUpdate, summoner, allTier, sumPeople, balanced}) => {

  return (
    <div id="community">
      <div id="comTitle">
        <div id="comTitleImg" />
        <div id="comTitleStateCover">
          <div id="comTitleName">말년중위 김도현</div>
          <div id="comTitleState">● 온라인</div>
        </div>
      </div>
      <div>
        <div className="communityTab">
          <div>일반 ({sumPeople}/10)</div>
          <button onClick={onCreate} id="addBtn">소환사 추가</button>
        </div>
        {
          summoner.map((summonerInfor)=>{
            return <Summoner 
            key={summonerInfor.id} 
            {...summonerInfor} 
            allTier={allTier} 
            onDelete={onDelete}
            onUpdate={onUpdate}
            balanced={balanced}
            />
          })
        }
      </div>
    </div>
  );
};

export default Community;