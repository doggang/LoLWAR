import '../style/Summoner.css';
import { useState, useRef, useEffect, useContext } from "react";
import { myContext } from '../App';

const FixedMem = ({id,sumName, tier, fixedId, setFixedId, fixedName, setFixedName,
    fixedPoint, setFixedPoint, onChangeMem,allPoint,fixedOnUpdate,fixedMem})=>{

    const fixedNameChange = (e)=>{
        setFixedName(e.target.value);
      }
  
      const fixedPointChange = (e)=>{
        setFixedPoint(e.target.value);
      }
  
       useEffect(()=>{
        fixedOnUpdate(id, fixedName,fixedPoint);
        console.log(id);
        // console.log(fixedName+"D");
        // console.log(fixedPoint);
      },[fixedName, fixedPoint])

    return(
        <div>
            <label className="memDetailWrap" key={id}>
                <input 
                  onChange={(e) => onChangeMem(sumName, id, tier, e)} 
                  className="memChkbox" 
                  type="checkbox" 
                  id={sumName}
                />                <div className="memImg" htmlFor={sumName}></div>
                  {/* <div className="memName" htmlFor={summ.sumName}>{summ.sumName}</div> */}
                  <input onChange={fixedNameChange} className="fixedNameEdit" type="text" name="" id="" defaultValue={sumName}/>

                    {/* 포인트 정하는 옵션 select */}
                    <select onChange={fixedPointChange}  className="fixedTierSelect">
                      {
                        allPoint.map((point, index)=>{
                        return <option key={index} name="selectTier" value={index} >{point}</option>
                        })
                      }
                    </select>
                </label>
        </div>
    )
}

export default FixedMem;