import { useState } from "react";
import Summoner from "./Summoner";

const Community = ({ sumCount, setSumCount, allTier, tierPoint, selected, setSelected,handleSelect}) => {
  const [sumState, setSumState] = useState([]); // 배열 상태

  // 새로운 소환사 추가
  const onClickAdd = () => {
    if (sumCount < 10) {
      const newSummoner = { id: Date.now() }; // 고유 ID 생성
      setSumState([...sumState, newSummoner]);
      setSumCount(sumCount + 1);
      console.log(sumCount);
    }
  };

  // 소환사 삭제
  const onClickDel = (id) => {
    setSumState(sumState.filter((sum) => sum.id !== id)); // 해당 ID 삭제
    console.log(id);
    setSumCount(sumCount - 1);
  };

  return (
    <div id="community">
      <div id="comTitle">
        <div id="comTitleImg" />
        <div id="comTitleStateCover">
          <div id="comTitleName">말년중위 김도현</div>
          <div id="comTitleState">● 온라인</div>
        </div>
      </div>
      <div>
        <div className="communityTab">
          <div>일반 ({sumCount}/10)</div>
          {sumCount < 10 && <button id="addBtn" onClick={onClickAdd}>소환사 추가</button>}
        </div>

        {/* sumState 배열을 기반으로 Summoner 렌더링 */}
        {sumState.map((sum) => (
          <Summoner 
            key={sum.id}
            id={sum.id}
            onClickDel={onClickDel} 
            allTier={allTier} 
            tierPoint={tierPoint}
            selected={selected} setSelected={setSelected} handleSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;