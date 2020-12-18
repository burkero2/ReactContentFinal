import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
            console.log("Class Clicked");
        }
    
    render() {
        return (
            <div>
                <h5>7. Events Class </h5>
                <button onClick = {this.clickHandler}>Click Me - Class Component</button>
                <hr></hr>
            </div>
        )
    }
}

export default EventsClass
