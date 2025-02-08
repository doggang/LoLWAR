const Summoner = ({sumCount,setSumCount,name,setName,allTier, tierPoint})=>{
    
    const onClickAdd = (e)=>{

    }
    return(
        <summoner>
            <div className="sumWrap">
                <div className="sumTitleImg"></div>
                <div className="sumNameWrap">
                    <input className="sumName" type="text" name="summonerName" id="" placeholder="이름"/>
                    <select className="tierSelect" name="" id="">
                    {
                        allTier.map((tier)=>{
                        return <option className="tierOption" value={tier}>{tier}</option>

                        })
                    }
                    </select>
                </div>
            </div>
        </summoner>
    );
}

export default Summoner;