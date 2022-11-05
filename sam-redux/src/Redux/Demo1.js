import React from 'react'
import { useSelector } from 'react-redux'

const Demo1 = () => {
  const num=useSelector(state=>state.count)    
  const name=useSelector(state=>state.name)    
  return (
    <div>
      <h1>demo1 component</h1>
      <button>{num}</button>
      <button>{name}</button>
    </div>
  )
}

export default Demo1
