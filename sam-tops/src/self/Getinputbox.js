import React from 'react'
import { useState } from 'react'

export default function Getinputbox() {
    const [data,setdata]=useState(null)
     
    function getdata(e){
        console.log(e);
        

    }

  return (
    <div>
      <h1>{data}</h1>
      <input type="text" onChange={getdata} ></input>
    </div>
  )
}
