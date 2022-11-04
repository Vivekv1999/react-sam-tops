import React from 'react'
import { useSelector } from 'react-redux'

export default function Demo() {
const statee=useSelector(state=>state.count)    
  return (
    <div>
      <h1>count:{statee}</h1>
    </div>
  )
}
