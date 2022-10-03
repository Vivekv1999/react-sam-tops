import React,{ useState } from 'react'

export default function V16hideshowtoggle() {
  const [status,setStatus]=useState(null)

  return (
    <>
    
  {
    status?<h1>click karta gayab ane pa6u click karat avi jase</h1>:null
  }  
    
  <button onClick={()=>setStatus(!status)}>Toggle</button>
    </>
  )
}
