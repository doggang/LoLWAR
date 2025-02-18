import '../style/Summoner.css';
import { useState, useRef } from "react";


const Summoner = ({id, sumName, tier, allTier, onDelete, onUpdate}) => {


  const [gameName, setGamename] = useState("");
  const nameChange = (e)=>{
    setGamename(e.target.value);
    onUpdate(id, gameName, gameTier);
  }

  const [gameTier, setGametier] = useState("");
  const tierChange = (e)=>{
    setGametier(e.target.value);
    onUpdate(id, gameName, gameTier);
  }

  const delClick = ()=>{
    onDelete(id);
  }
  
  return (
    <div className="sumWrap">
      <div className="sumTitleImg"></div>
      <div className="sumNameWrap">
        <input value={gameName} onChange={nameChange} name="name" className="sumName" type="text" placeholder="이름" />
        <select className="tierSelect" onChange={tierChange} >
          {
            allTier.map((alltier, index)=>{
              return <option key={index} name="selectTier" value={index}>{alltier}</option>
            })
          }
        </select>
      </div>
      {/* 삭제 버튼 클릭 시 해당 ID 전달 */}
      <button onClick={delClick} className="delBtn">X</button>
    </div>
  );
};

export default Summoner;