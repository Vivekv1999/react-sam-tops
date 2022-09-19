import React from 'react'


function Student(props) {
  return (
    <div>
      <h1>name is {props.name}</h1>
    </div>
  )
}


export default function CompInCom1(props) {
  return (
    <div>
      <Student name={props.name}/>
    </div>
  )
}
