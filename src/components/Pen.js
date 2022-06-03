import React from 'react';

const Pen = ({ greasedSet, setGreased, setSort }) => (
   <div>
      <button onClick={() => setGreased(!greasedSet)}>
         {greasedSet ? 'All Hogs' : 'Greased Hogs'}
      </button>
      <select
         onChange={(event) => {
            setSort(event.target.value);
         }}
      >
         <option>none</option>
         <option>name</option>
         <option>weight</option>
      </select>
   </div>
);

export default Pen;
