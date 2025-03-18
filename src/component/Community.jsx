import { useEffect, useState } from "react";
import Summoner from '../component/Summoner';
import '../style/Community.css';

const Community = ({onCreate, onDelete, onUpdate, summoner, allTier, sumPeople, balanced, fixedMem, setSumPeople, checkedList, setCheckedList,setSummoner}) => {

  const [addMemBtn, setAddMemBtn] = useState("OFF");
  const [add, setAdd] = useState(0);
  

  const onChangeMem = (sumName, id, tier, e) => {
  // 체크박스의 체크 상태 가져오기
  const isChecked = e.target.checked;
  
  // 체크된 경우
  if (isChecked) {
    // 현재 체크된 리스트에 추가하기 전에 개수 확인
    if (checkedList.length + sumPeople >= 10) {
      alert("최대 10명까지만 선택할 수 있습니다.");
      e.target.checked = false; // 체크 해제
      return;
    }
    
    // 체크된 리스트에 추가
    setCheckedList([...checkedList, { id, sumName, tier }]);
  } else {
    // 체크 해제된 경우, 체크된 리스트에서 제거
    setCheckedList(checkedList.filter(item => item.id !== id));
  }
};

  const OnClickAddMemBtn = (e)=>{
    addMemBtn==="OFF"?setAddMemBtn("ON"):setAddMemBtn("OFF")
  }

  const onClickAdd = (e)=>{
     // 현재 체크된 리스트에 추가하기 전에 개수 확인
     if (checkedList.length + sumPeople > 10) {
      alert("최대 10명까지만 선택할 수 있습니다.");
      e.target.checked = false; // 체크 해제
      return;
    }
  }
  const addBtn = (e)=>{
    for(let i=0; i<summoner.length; i++){
      //console.log(summoner[i].id);
    }
    setAdd(add+1);
  }

  useEffect(()=>{

    var idSet = new Set(checkedList.map(obj => obj.id));
    var hasCommonId = false;
    for(let i=0; i<summoner.length; i++){
      if(idSet.has(summoner[i].id)){
        hasCommonId = true;
        break;
      }
    }
    if(hasCommonId!==true){
      for(let i=0; i<checkedList.length; i++){
        setSummoner(prevList => [...prevList, checkedList[i]]);
      }
    }else{
      alert("이미 추가한 소환사가 있습니다.\n추가된 소환사를 제외하고 추가해주십시오.");
    }
    hasCommonId = false;
     },[add])

  return (
    <div id="community">
      {
        addMemBtn==="ON"
        ?<div id="mem">
          <button id="memCloseBtn" onClick={OnClickAddMemBtn} >X</button>
          <div id="memTitle">추가 가능한 플레이어</div>
          <div id="memDetailWrapCover">
          {
            fixedMem.map((summ, key) => (
              <label className="memDetailWrap" key={key}>
              <input 
                onChange={(e) => onChangeMem(summ.sumName, summ.id, summ.tier, e)} 
                className="memChkbox" 
                type="checkbox" 
                id={summ.sumName}
              />                <div className="memImg" htmlFor={summ.sumName}></div>
                <div className="memName" htmlFor={summ.sumName}>{summ.sumName}</div>
              </label>
            ))
          }
            
            


          </div>
          <button onClick={()=>{
            onClickAdd(); addBtn();}} id="memAdd">추가하기</button>
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