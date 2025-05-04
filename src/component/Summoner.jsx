import '../style/Summoner.css';
import { useState, useRef, useEffect, useContext } from "react";
import { myContext } from '../App';


const Summoner = ({id, sumName, tier}) => {

    const {mode, allTier, allPoint, tierPoint,
      onDelete, onUpdate, balanced, hide} = useContext(myContext);

  const [gameName, setGamename] = useState(sumName || "");
    const nameChange = (e)=>{
      setGamename(e.target.value);
    }

  const [gameTier, setGametier] = useState(tier || 0);
  const tierChange = (e)=>{
    setGametier(e.target.value);
  }

  const delClick = ()=>{
    onDelete(id);
  }
  
  useEffect(()=>{
    onUpdate(id, gameName, gameTier);
  },[gameName, gameTier])

  return (
    <div className="sumWrap">
      <div className="sumTitleImg"></div>
      <div className="sumNameWrap">
        <input value={gameName} onChange={nameChange} name="name" className="sumName" type="text" placeholder="이름" />
        {
          
          hide=='hide' ? null :
            <select className="tierSelect" onChange={tierChange} >
              {
                mode === "티어" ? allTier.map((alltier, index)=>{
                  return <option key={index} name="selectTier" value={index} >{alltier}</option>
                }):allPoint.map((allPoint, index)=>{
                  return <option key={index} name="selectTier" value={index} >{allPoint}</option>
                })
                
              }
          </select>
        }
      </div>
      {/* 삭제 버튼 클릭 시 해당 ID 전달 */}
      <button onClick={delClick} className="delBtn">X</button>
    </div>
  );
};

export default Summoner;