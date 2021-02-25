import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
 

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Hello world!',
            body: 'It works!',
            userId: 123,
        }).then(response => console.log(response))
    }

    render() {
        return (
            <div>
                <h5>Script 48: Sending Data with POST</h5>
                <button onClick = {this.postToApi}>Create Post</button>
                <hr />
            </div>
        )
    }
}

export default HTTPPost
