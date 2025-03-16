import { useState } from "react";
import Summoner from '../component/Summoner';
import '../style/Community.css';

const Community = ({onCreate, onDelete, onUpdate, summoner, allTier, sumPeople, balanced}) => {

  const [addMemBtn, setAddMemBtn] = useState("OFF");
  const OnClickAddMemBtn = (e)=>{
    addMemBtn==="OFF"?setAddMemBtn("ON"):setAddMemBtn("OFF")
  }

  return (
    <div id="community">
      {
        addMemBtn==="ON"
        ?<div id="mem">
          <button id="memCloseBtn" onClick={OnClickAddMemBtn} >X</button>
          <div id="memTitle">추가 가능한 플레이어</div>
          <div className="memDetailWrap">   {/* 고정멤버 Wrap */}
            <input className="memChkbox" type="checkbox" id="memChk"/>
            <label className="memImg" htmlFor="memChk"></label>
            <label className="memName" htmlFor="memChk">닉네임은그것나랑께요</label>
          </div>
          <button id="memAdd">추가하기</button>
        </div>
        :null
      }
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
          <button onClick={OnClickAddMemBtn} id="fixedAddBtn">고멤</button>
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