import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild';

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log("Constructor Called");
        super(props)
    
        this.state = {
             data: "loading",
        }
    }

    getData(){
        console.log('getData() called')
        setTimeout(() => {
            console.log('Data fetched');
            this.setState({
                data: "loaded",
            })
        }, 3000)
    }

    componentDidMount(){
        console.log("Component Mounted");
        this.getData();
    }


    render() {
        console.log("Render Method Called");
        return (
            <div>
                <h5>Component Lifecycles: componentDidMount</h5>
                <h2>{this.state.data}</h2>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM
