import React, { Component } from 'react'

export default class StateMng extends Component {
    constructor() {
        super()
        this.state = {
            count: 0 ,
            delta: 0
        }
        this.detail = {
            name: "mit",
            address: "surat"
        }
    }

    incrementHandle=()=>{        
        this.setState({
            count: this.state.count+1
        })
        if(this.state.count%5===0){
            this.setState({
                delta:this.state.delta+1
            })
        }
    }
    // decrementeHandle=()=>{
    //     this.setState({
    //         count:this.state.count-1,
           
    //     })
    // }


    render() {
        return (
            <>
                <div><h1>Statemangement</h1></div>
                <h2>count : {this.state.count}</h2>
                <h2>delta : {this.state.delta}</h2>
                <button onClick={this.incrementHandle}>Increment</button>
                <button onClick={this.decrementeHandle}>Decrement</button>
<hr></hr>
                <h1>Details</h1>


            </>
        )
    }
}
