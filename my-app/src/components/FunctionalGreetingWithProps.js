import React from "react";

const FunctionalGreetingWIthProps = (props) => {
    console.log(props);
    return (
        <div>
            <h5>2. Stateful Greeting with Props</h5>
            <h1>Hello! {props.name}</h1>
            <hr></hr>   
        </div>
    )
}

export default FunctionalGreetingWIthProps;