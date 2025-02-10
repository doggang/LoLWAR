import { useEffect } from "react";

const Summoner = ({ id, onClickDel, allTier, tierPoint }) => {
  useEffect(() => {
    console.log(`소환사 ${id} 생성됨`);
  }, []);

  return (
    <div className="sumWrap">
      <div className="sumTitleImg"></div>
      <div className="sumNameWrap">
        <input name="name" className="sumName" type="text" placeholder="이름" />
        <select className="tierSelect">
          {allTier.map((tier, index) => (
            <option name="selectTier" key={index} value={tier}>{tier}</option>
          ))}
        </select>
      </div>
      {/* 삭제 버튼 클릭 시 해당 ID 전달 */}
      <button className="delBtn" onClick={() => onClickDel(id)}>X</button>
    </div>
  );
};

export default Summoner;