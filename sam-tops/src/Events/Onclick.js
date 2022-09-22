import React, { Component } from 'react'

export default class Onclick extends Component {
    constructor(){
        super()
        this.state={
            name:"rrr"
        }
    }
    
    myfunck=()=>{                         
        document.body.style.backgroundColor="black"
        document.body.style.color="yellow"
    }

  render() {
    return (
        <>
      <div>Onclick</div>
      <h1>Name: {this.state.name}</h1>
      <button onClick={()=>{this.setState({name:"nil"})}}>Click</button>
      {/* <button style="color:blue" >click for change</button> */}
      <button style={{margin: "0px 15px"}} onClick={this.myfunck}>ccc</button>
      {/* <button style={{margin: "0px 15px"}} onClick={()=>{document.body.style.backgroundColor="black" document.body.style.color="white"}}>ccc</button> */}
      {/* ===========why am i not able to do this { one , two }=============== */}
        </>
    )
  }
}
