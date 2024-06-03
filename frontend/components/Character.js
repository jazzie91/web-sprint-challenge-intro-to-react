import React, { useState } from 'react'


function Character({data}){  // ❗ Add the props
  

    const [showHomeworld, setShowHomeworld] = useState(false);
  
    const toggleHomeworld = () => {
      setShowHomeworld(!showHomeworld);
    };
  
    return (
      <div className="character-card" onClick={toggleHomeworld}>
        <h2 className="character-name">{data.name}</h2>
        {showHomeworld && <p>Planet: <span className="character-planet">{data.homeworld.name}</span></p>}
      </div>
    );
  }
  export default Character
 
