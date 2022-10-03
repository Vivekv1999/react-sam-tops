import React, { useRef } from 'react'

export default function UseRef() {
    const elements=useRef()
    const demo=()=>{
        elements.current.style.color="red"
        elements.current.style.backgroundColor="yellow"
        elements.current.style.id="id11"
        elements.current.style.className="namee"
        console.log(elements.current);
        
    }
  return (
    <>
    <div>useref</div>
    <input ref={elements} type="text" />
    <button onClick={demo}>click</button>
    </>
  )
}
