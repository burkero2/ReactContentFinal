import React, { Component } from 'react'
import MethodsAsPropsChild from "./MethodsAsPropsChild"

export class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
            isLoggedIn: false
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,

        });
        console.log(this);
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,

        });
        console.log(this);
    }
    
    render() {
        return (
            <div>
                <h5>12. Methods As Props Parent</h5>
                <MethodsAsPropsChild 
                    isLoggedIn = {this.state.isLoggedIn}
                    handleSignIn= {this.handleSignIn}
                    handleSignOut= {this.handleSignOut}
                    />
                <hr></hr>
            </div>
        )
    }
}

export default MethodsAsPropsParent
