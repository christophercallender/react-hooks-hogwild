import React from 'react';

const Pig = ({ uuidv4, clickedSet, setClicked, filterAndSortHogs }) => (
   <div class="ui grid container">
      {filterAndSortHogs().map((hog) => (
         <div
            key={uuidv4()}
            className="pigTile"
            onClick={() => setClicked(!clickedSet)}
         >
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.specialty}></img>
            {clickedSet ? (
               <>
                  <p>Specialty: {hog.specialty} </p>
                  <p>Greased: {hog.greased ? 'true' : 'false'} </p>
                  <p>Weight: {hog.weight} </p>
               </>
            ) : null}
         </div>
      ))}
   </div>
);

export default Pig;
