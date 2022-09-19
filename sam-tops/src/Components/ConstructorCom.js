import React, { Component } from 'react'

export default class ConstructorCom extends Component {
    constructor(){
        super()
        this.state={
            name:"vivek",
            address:"surat"
        }
    }


  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Address: {this.state.address} {this.props.address}</h1>
      </div>
    )
  }
}
