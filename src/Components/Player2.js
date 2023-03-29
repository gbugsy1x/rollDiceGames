
import React, {useEffect, useState} from 'react'




export const Player2 = ({data2, temp}) => {
    const [du1, setDu1] = useState();
    function play(){
        let ab2=Math.floor(Math.random()*7)+ Math.floor(Math.random()*7)
        setDu1(ab2)
    }
    useEffect(() => {
        temp(du1)
    },[du1])
   
    
    return (
      <div id="Player2">
        <p>
          Player Rolled:<span id="rollinfo2">{du1 ? du1 : null}</span>
        </p>
        <button onClick={play}> Play2 </button>
      </div>
    );
    
    
}


