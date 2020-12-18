import React from "react";

class EventBinding extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    // Step 2: Create the handleClick function
    handleClick(){
        // Step 3: Use the this.setState() Method
        this.setState({
            introduction : "Goodbye",
            buttonText: "Enter",
        });

        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render(){
        return ( //return method only wants to return 1 element e.g. a div.
            <div>
                <h5>8. Events Binding</h5>
                <h1>{this.state.introduction} {this.props.name}</h1>
                <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button> {/* Step 1: Set the click action */}
                <hr></hr>
            </div>

        )// must explain why arrow function is used in the onClick attribute
    }
}

export default EventBinding;