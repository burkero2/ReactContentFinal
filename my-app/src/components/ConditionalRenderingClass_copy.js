import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: true,
            isLoggedIn: true,
        }
    }
    
    render() {
        return (
            <div>
                <h5>10. Conditional Rendering Class</h5>
                <h1>{this.state.isLoaded ? "Data Loaded" : "Data Not Loaded"}</h1>
                {
                    this.state.isLoggedIn ? (
                        <div>
                            <p>Welcome to the site! Please complete the steps below.</p>
                            <ol>
                                <li>Confirm your email</li>
                                <li>Complete your profile</li>
                                <li>Subscribe to the newsletter</li>
                            </ol>
                        </div>
                    ) : (
                        <div>
                            <h1>Please Sign In</h1>
                        </div>
                    )
                }
                <hr></hr>
            </div>
        )
    }
}

export default ConditionalRenderingClass
