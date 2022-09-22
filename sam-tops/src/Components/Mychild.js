import React, { Component } from 'react'

export default class Mychild extends Component {
  render() {
    return (
      <div> 
        <h1>hello react</h1>
        {this.props.childern}
      </div>
    )
  }
}
