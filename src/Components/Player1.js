import React, { useEffect, useState } from "react";
// import  xyz  from "./Button" ;



export const Player1 = ({ data1, temp }) => {
  const [du, setDu] = useState();

  function play() {
    let ab = Math.floor(Math.random() * 7) + Math.floor(Math.random() * 7);
    setDu(ab);
   
  }

 
  useEffect(() => {
    temp(du);
  }, [du]);

  return (
    <div id="Player1">
      <p>
        Player Rolled:<span id="rollinfo1">{du ? du : null}</span>
      </p>
      <button onClick={play}> Play1 </button>
    </div>
  );
};
