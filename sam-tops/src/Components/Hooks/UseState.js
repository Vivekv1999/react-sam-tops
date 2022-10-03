import React, { useState } from 'react'

export default function UseState() {
    const [num, setnum] = useState(0)
       function handelincremrnt(){
            setnum(num+1)
        }

        const handeldecremrnt=()=>{   //second methos to write function 
            setnum(num-1);
        }

        ////-------------> reset btn we direct change --> onclick  ==> anounomus function use 
        
    return (
        <>
            <div>UseState</div>
            <h1>Number:{num}</h1>
            <button onClick={handelincremrnt}>increment</button>
            <button onClick={handeldecremrnt}>decrement</button>
        <button onClick={()=>{setnum(0)}}>reset</button> 

        </>
    )
}
