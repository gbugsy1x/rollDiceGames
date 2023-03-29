import React from 'react'

const Button = () => {
    function reset (){
        document.getElementById('rollinfo1').innerText=''
        document.getElementById('rollinfo2').innerText=''
    }
    return (
        <div>
            <button onClick= {reset}>Reset</button>
        </div>) 
    }

    export default Button