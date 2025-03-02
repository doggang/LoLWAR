import { useEffect, useState } from 'react';
import '../style/Pick.css';

const Pick = ({summoner, aTeam, bTeam, balanced, allTier, tierPoint})=>{

  const onclickBalance = ()=>{
    balanced();
  }
  
  useEffect(()=>{
    balanced();
    console.log(summoner);
  },)
  
  return(
    <div id="pick">
        
        <div id="roomTitle">
          <div id="roomTitleFirst">
            <div id="titleImg"/>
            <p id="rooTitleWord">말년중위 김도현 님의 게임</p>
          </div>
          <div id="roomSubTitle">
            <p>소환사의 협곡</p>
            <p>5대5</p>
            <p>토너먼트 드래프트</p>
          </div>
        </div>

        <div id="room">
          <div className="roomTeamCover">
            <div className="roomTeam">1팀</div>

            {
              aTeam.map((player,i)=>(
                (player==0 || player==null) ? <div key={i} className="summoner">비어 있음</div> : 
                <div key={i} className="realSummoner">
                  <div className='sumInforWrap'>
                    <div className='sumInforIcon'></div>
                    <div>{player.sumName}</div>
                  </div>
                  <div>{allTier[player.tier]}</div>
                </div> 
              ))
            }

          </div>

          <div className="roomTeamCover">
            <div className="roomTeam">2팀</div>

            {
              bTeam.map((player,i)=>(
                (player==0 || player==null) ? <div key={i} className="summoner">비어 있음</div> : 
                <div key={i} className="realSummoner">
                  <div className='sumInforWrap'>
                    <div className='sumInforIcon'></div>
                    <div>{player.sumName}</div>
                  </div>
                  <div>{allTier[player.tier]}</div>
                </div> 
              ))
            }
            
          </div>
        </div>

        <div id="introduce">
          <div id="introduceTitle">사용 방법</div>
          <div id="introduceHow">
            우측 상단에 소환사 추가 버튼 클릭 후,<br />
            이름, 티어 정보를 입력!<br />
            화면 하단부에 밸런스 맞추기 버튼을 누르면 끝!
          </div>
        </div>
        <button className="start-button" onClick={()=>{
          onclickBalance();
        }}>밸런스 맞추기</button>

      

    </div>
  );
}

export default Pick;