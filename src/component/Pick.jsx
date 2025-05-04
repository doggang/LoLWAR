import { useEffect, useState, useContext } from 'react';
import '../style/Pick.css';
import { myContext } from '../App';


const Pick = () => {
  const { mode, allPoint, summoner, aTeam, bTeam, balanced, allTier, tierPoint, settingATeam, settingBTeam, setSettingATeam, setSettingBTeam,hide } = useContext(myContext);
  const onclickBalance = () => {
    // 모든 소환사의 정보가 입력되었는지 확인
    const allFilled = summoner.every(player => player.sumName !== "");
     
    if (!allFilled) {
      alert("모든 소환사의 정보를 입력하세요");
      return;
    }
     
    // 직접 balanced 함수 호출
    balanced();
  
    // 결과를 즉시 설정
    setSettingATeam(aTeam);
    setSettingBTeam(bTeam);
  };

  return (
    <div id="pick">
      <div id="roomTitle">
        <div id="roomTitleFirst">
          <div id="titleImg" />
          <input id="rooTitleWord" defaultValue="말년중위 김도현 님의 게임" />
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
            settingATeam.map((player, i) => (
              (player == 0 || player == null) ? <div key={i} className="summoner">비어 있음</div> :
                <div key={i} className="realSummoner">
                  <div className='sumInforWrap'>
                    <div className='sumInforIcon'></div>
                    <div>{player.sumName}</div>
                  </div>
                  {
                    hide=='hide' ? null :
                    <div>{
                        mode==="티어" ? allTier[player.tier] : allPoint[player.tier]
                      }</div>
                  }
                </div>
            ))
          }

        </div>

        <div className="roomTeamCover">
          <div className="roomTeam">2팀</div>
          
          {
            settingBTeam.map((player, i) => (
              (player == 0 || player == null) ? <div key={i} className="summoner">비어 있음</div> :
                <div key={i} className="realSummoner">
                  <div className='sumInforWrap'>
                    <div className='sumInforIcon'></div>
                    <div>{player.sumName}</div>
                  </div>
                  {
                    hide=='hide' ? null :
                    <div>{
                        mode==="티어" ? allTier[player.tier] : allPoint[player.tier]
                      }</div>
                  }
                </div>
            ))
          }

        </div>
      </div>

      <div id="introduce">
        <div id="introduceTitle">사용 방법</div>
        <div id="introduceHow">
          티어와 포인트 중 밸런싱할 기준을 정하고<br />
          우측 상단에 소환사 추가 버튼 클릭 후,<br />
          이름, 티어 정보를 입력!<br />
          화면 하단부에 밸런스 맞추기 버튼을 누르면 끝!
        </div>
      </div>
      <button className="start-button" onClick={onclickBalance}>밸런스 맞추기</button>
    </div>
  );
}

export default Pick;
