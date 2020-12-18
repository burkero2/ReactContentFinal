import React from "react";

class StatefulGreetingPrevState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello",
      buttonText: "Exit",
      count: 0,
    };
  }

  handleClick() {
    this.setState({
      introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello",
      buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    }, () => { // Use a call back function to ensure the code is run synchronously with setState() method
      console.log(this.state.introduction);
      console.log(this.state.buttonText);
    });
  }

  increment() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State: ", prevState);
      console.log("Previous Props: ", prevProps);
      return {
        count: prevState.count + 1,
      }
    }, () => {
      console.log(this.state.count)
    });
  }



  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h5>5. Stateful Greeting with Previous State</h5>
        <h1>{this.state.introduction} {this.props.name}</h1>
        <p>You have incremented {this.state.count} times.</p>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        <button onClick={() => this.increment()}>Increment</button>

        <button onClick={() => this.incrementFive()}>Increment Five</button>
        <hr></hr>
      </div>

    )// must explain why arrow function is used in the onClick attribute
  }
}

export default StatefulGreetingPrevState;