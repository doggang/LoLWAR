import { useState, useRef, useEffect } from 'react'


const Summoner = ({sumCount,setSumCount,name,setName,allTier, tierPoint})=>{
    
    const onClickDel = (e)=>{
        setSumCount(sumCount-1);
        console.log(sumCount);
    }
    return(
        <summoner>
            <div className="sumWrap">
                <div className="sumTitleImg"></div>
                <div className="sumNameWrap">
                    <input className="sumName" type="text" name="summonerName" id="" placeholder="이름"/>
                    <select className="tierSelect" name="" id="">
                    {
                        allTier.map((tier, index)=>{
                        return <option className="tierOption" key={index} value={tier}>{tier}</option>

                        })
                    }
                    </select>
                </div>
                <button className="delBtn" onClick={onClickDel}>X</button>

            </div>
        </summoner>
    );
}

export default Summoner;