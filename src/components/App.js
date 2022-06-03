import React, { useState } from 'react';
import Nav from './Nav';
import Pig from './Pig';
import Pen from './Pen';
import hogs from '../porkers_data';
import { v4 as uuidv4 } from 'uuid';

const [greasedSet, setGreased] = useState(false);
const [clickedSet, setClicked] = useState(false);
const [sortSet, setSort] = useState('none');

const filterAndSortHogs = () => {
   const filtered = hogs.filter((hog) => {
      greasedSet ? hog.greased : true;
   });
   sortSet === 'none'
      ? filtered
      : sortSet === 'name'
      ? filtered.sort((a, b) => {
           a.name > b.name ? 1 : -1;
        })
      : filtered.sort((a, b) => {
           a.weight < b.weight ? 1 : -1;
        });
};

const App = () => (
   <div className="App">
      <Nav />
      <Pen greasedSet={greasedSet} setGreased={setGreased} setSort={setSort} />
      <Pig
         uuidv4={uuidv4}
         clickedSet={clickedSet}
         setClicked={setClicked}
         filterAndSortHogs={filterAndSortHogs}
      />
   </div>
);

export default App;
