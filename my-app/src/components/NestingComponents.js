import React, { Component } from 'react'
import UserMessage from "./UserMessage"
import UserData from "./UserData"

export class NestingComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
            isLoggedIn: false,
        }
    }
    
    render() {
        return (
            <div>
                <h5>11. Nesting Components</h5>
                <UserData isLoaded = {this.state.isLoaded}/>
                <UserMessage isLoggedIn = {this.state.isLoggedIn}/>
                <hr></hr>
            </div>
        )
    }
}

export default NestingComponents
