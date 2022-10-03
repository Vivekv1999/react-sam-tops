import React, { Component } from 'react'

export default class V24componenetdidmount extends Component {
    constructor(){
        super()
        this.state={
            name:"nil"
        }
    }


  render() {
    return (
      <div>
        
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
