import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Demo() {
const statee=useSelector(state=>state.count)    
const name=useSelector(state=>state.name)    
const dispatch=useDispatch()

  return (
    <div>
      <h1>count:{statee}</h1>
      <h1>count:{name}</h1>
      <button onClick={()=>dispatch({type:'incr'})}>increment</button>
      <button onClick={()=>dispatch({type:'decr'})}>decrement</button>
    </div>
  )
}
