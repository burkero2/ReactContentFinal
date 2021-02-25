import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error: null,
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response);
            this.setState({
                posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
            })
        })
        .catch(error => {
            this.setState({
                error: error.message,
            })
            console.log(error.message);
        })
    }



    render() {
        const posts = this.state.posts;

        return (
            <div>
                <h5>47 Fetching Data with Get Part 2</h5>
                <h2>Posts:</h2>
                {
                    posts.length ? (
                        posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.id}. {post.title}</h2>
                            <h4>By User ID {post.userId}</h4>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                        ))
                    ) : (
                    <h4>{this.state.error}</h4>
                    )
                }
                <hr />
            </div>

        )
    }
}

export default HTTPRequests
