import React from "react";

class StatefulGreetingWithCallback extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick(){
        this.setState({
            introduction: "Goodbye",
            buttonText: "Enter",
         }, () => { // Use a call back function to ensure the code is run synchronously with setState() method
            console.log(this.state.introduction);
            console.log(this.state.buttonText);
        });    
    }

    render(){
        return ( 
            <div>
                <h5>4. Stateful Greeting with Callback</h5>
                <h1>{this.state.introduction} {this.props.name}</h1>
                <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button> 
                <hr></hr>
            </div>

        )// must explain why arrow function is used in the onClick attribute
    }
}

export default StatefulGreetingWithCallback;