import React, { Component } from 'react'

export default class OnFormSubmit extends Component {
    constructor() {
        super()
        this.state = {
            name: null,
            data: null
        }
    }

    handlechange = (e) => {

        this.setState({
            name: e.target.value
            // date:
        })
    }

    handlesubmit = (e) => {
        // e.preventDefault()
        e.preventDefault()
        console.log('1111');
        

        this.setState({
            data: this.state.name
        })

    }

    render() {
        return (
            <>
                <h1>Name:{this.state.data}</h1>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" onChange={this.handlechange} />
                    <button>submit</button>
                </form>

            </>
        )
    }
}
