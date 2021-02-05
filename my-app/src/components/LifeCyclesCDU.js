import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greeting: "Hello",
        }
    }
    
    render() {
        return (
            <div>
                <h5>Component Life Cycles: componentDidUpdate</h5>
                <h2>{this.state.greeting}</h2>
            </div>
        )
    }
}

export default LifeCyclesCDU
