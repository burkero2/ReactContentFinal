import React, { Component } from 'react'
import MethodsAsPropsChild from "./MethodsAsPropsChild"

export class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
        }
    }
    
    render() {
        return (
            <div>
                <h5>12. Methods As Props Parent</h5>
                <MethodsAsPropsChild isLoaded = {this.state.isLoaded}/>
                <hr></hr>
            </div>
        )
    }
}

export default MethodsAsPropsParent
