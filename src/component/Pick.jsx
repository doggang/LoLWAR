const Pick = ()=>{
  return(
    <pick id="pick">
        
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
            <div className="summoner">비어 있음</div>
            <div className="summoner">비어 있음</div>
            <div className="summoner">비어 있음</div>
            <div className="summoner">비어 있음</div>
            <div className="summoner">비어 있음</div>
          </div>

          <div className="roomTeamCover">
            <div className="roomTeam">2팀</div>
            <div className="summoner">비어 있음</div>
            <div className="summoner">비어 있음</div>
            <div className="summoner">비어 있음</div>
            <div className="summoner">비어 있음</div>
            <div className="summoner">비어 있음</div>
          </div>
        </div>

        <div id="introduce">
          <div id="introduceTitle">사용 방법</div>
          <div id="introduceHow">대충 우측 커뮤니티 섹션에서 닉네임, 티어와 포인트<br />추가하기.
          <br /><br />마무리로 밸런스 맞추기. 참 쉽죠 ?</div>
        </div>
        <button className="start-button">밸런스 맞추기</button>

      

    </pick>
  );
}

export default Pick;