import { useEffect, useState, useContext } from "react";
import Summoner from '../component/Summoner';
import '../style/Community.css';
import { myContext } from '../App';
import FixedMem from "./FixedMem";


const Community = () => {
  const {onCreate, onDelete, onUpdate, summoner, allTier, allPoint, sumPeople, balanced,
    fixedMem, setSumPeople, checkedList, setCheckedList,setSummoner, hide,
    //고멤함수 아래
    fixedOnCreate,fixedMode,setFixedMode,fixedOnUpdate
  } = useContext(myContext);
  const [addMemBtn, setAddMemBtn] = useState("OFF");
  const [add, setAdd] = useState(0);
  const [fixedName, setFixedName] = useState("");
  const [fixedId, setFixedId] = useState();
  const [fixedPoint, setFixedPoint] = useState();

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
    setCheckedList([]); 
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
    if (summoner.length < 10) {
      setAdd(add+1);
    }else{
      alert("최대 10명까지만 선택할 수 있습니다.");
    }
  }
  const onClickEdit = (e)=>{
    if(fixedMode=="normal"){
      setFixedMode("edit");
    }else{
      setFixedMode("normal");
    }

    fixedOnUpdate();
  }
  const onClickEditExit = (e)=>{
    if(fixedMode=="normal"){
      setFixedMode("edit");
    }
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

     const fixedNameChange = (e)=>{
      setFixedName(e.target.value);
    }

    const fixedPointChange = (e)=>{
      setFixedPoint(e.target.value);
    }

     useEffect(()=>{
      // fixedOnUpdate(fixedId, fixedName,fixedPoint);
    },[fixedId, fixedName, fixedPoint])

  return (
    <div id="community">
      {
        addMemBtn==="ON"
        ?<div id="mem">
          <button id="memCloseBtn" onClick={ ()=>{onClickEditExit(); OnClickAddMemBtn();}} >X</button>
          <div id="memTitle">{fixedMode=="normal"?"수정하기":"추가하기"} </div>
          <div id="memDetailWrapCover">
          
          {
            fixedMode=="normal"?
              // 수정 버전 (고멤 추가 O)
              fixedMem.map((summ, key) => (
                  <FixedMem 
                    key={summ.id}
                    {...summ}  
                    fixedId={fixedId}
                    setFixedId={setFixedId}
                    fixedName={fixedName}
                    setFixedName={setFixedName}
                    fixedPoint={fixedPoint}
                    setFixedPoint={setFixedPoint}
                    onChangeMem={onChangeMem}
                    allPoint={allPoint}
                    fixedOnUpdate={fixedOnUpdate}
                    fixedMem={fixedMem}
                  />

              )):
              // 일반 버전 (고멤 추가 X)
              
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
          <div id="memBtnWrap">
          {
            fixedMode=="normal"
              ?
                <button onClick={()=>{
                  onClickEdit(); fixedOnUpdate(fixedId, fixedName,fixedPoint);}} className="memBtn">저장하기
                </button>
              :
                <button onClick={()=>{
                    onClickEdit();}} className="memBtn">수정하기
                </button>
          }
            {
              fixedMode=="normal"?
                <button onClick={()=>{
                  fixedOnCreate();}} className="memBtn">고멤추가
                </button>:
                <button onClick={()=>{
                  onClickAdd(); addBtn();}} className="memBtn">추가하기
                </button>
            }
          </div>
          
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
          <div>일반 ({summoner.length}/10)</div>
          <button onClick={()=>{onClickEditExit(); OnClickAddMemBtn();}} id="fixedAddBtn">고멤</button>
          <button onClick={onCreate} id="addBtn">소환사 추가</button>
        </div>
        {
          summoner.map((summonerInfor)=>{
            return <Summoner 
            key={summonerInfor.id} 
            {...summonerInfor} 
            />
          })
        }
      </div>
    </div>
  );
};

export default Community;