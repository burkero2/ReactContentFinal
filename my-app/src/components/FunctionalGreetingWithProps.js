import React from "react";

const FunctionalGreetingWIthProps = (props) => {
    console.log(props);
    return <h1>Hello! {props.name}</h1>
}

export default FunctionalGreetingWIthProps;