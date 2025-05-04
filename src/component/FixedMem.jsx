import { useState, useEffect } from 'react';

export default function FixedMem({
  id,
  sumName,
  tier,
  fixedOnUpdate,
  allPoint,
  onChangeMem,
  allTier,
  mode,
  fixedOnDelete
}) {
  // 각 컴포넌트 인스턴스마다 별도의 상태
  const [name, setName] = useState(sumName);
  const [point, setPoint] = useState(tier);

  const onClickFixedDelBtn = (e)=>{
    fixedOnDelete(id);
  }
  // name 또는 point가 바뀔 때만 해당 id 아이템 업데이트
  useEffect(() => {
    fixedOnUpdate(id, name, point);
  }, [id, name, point]);

  return (
    <label className="memDetailWrap">
      <input
        type="checkbox"
        className="memChkbox"
        onChange={e => onChangeMem(name, id, point, e)}
      />

      <div className="memImg"/>

      {/* value 바인딩 */}
      <input
        type="text"
        className="fixedNameEdit"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select
        className="fixedTierSelect"
        value={point}
        onChange={e => setPoint(Number(e.target.value))}
      >

        {
          mode === "티어" 
          ? 
            allTier.map((alltier, index)=>{
              return <option key={index} name="selectTier" value={index} >{alltier}</option>
            })
          :
            allPoint.map((allPoint, index)=>{
              return <option key={index} name="selectTier" value={index} >{allPoint}</option>
            })
        }
      </select>
      <button className='FixedDelBtn' onClick={onClickFixedDelBtn}>X</button>
    </label>
  );
}