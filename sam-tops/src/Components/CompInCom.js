import React, { Component } from 'react'


class Student extends Component {
  render() {
    return (
      <div>
        <h1>hello guys... i am not main comonnent</h1>
      </div>
    )
  }
}


export default class CompInCom extends Component {
  render() {
    return (
      <div>
        <Student />
        <Student />
        <Student />
        <Student />
      </div>
    )
  }
}
