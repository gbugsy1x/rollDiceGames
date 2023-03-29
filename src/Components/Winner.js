import React from 'react'


export default function Winner({data1, data2}) {
    
    
    console.log(data1)
    return (

        <div>
            <p>The winner is:<span  id='winner'> {data1>data2 ? data1 : data2}</span></p>
        </div>
    )
}
