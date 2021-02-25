import React, { useState, useEffect } from 'react'
import axios from 'axios'
 
function HTTPHooks() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [postMessage, setPostMessage] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data)
            ? response.data
            : [response.data]
            
            // Using the function SetPosts() created above
            setPosts(data) 
        })
        
        .catch(error => {
            // Useing the function setError instead
            setError(error.message)
        })
    }, [])

    const postToApi = () => {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: 'Hello world!',
                body: 'It works!',
                userId: 123,
            }).then(response => {
                setPostMessage(response.status === 201
                    ? `Success! Title: ${response.data.title}`
                    : 'Failed')
                })
        }


  return (
    <div>
        <h5>Script 49: HTTP Hooks</h5>
        <p>{postMessage}</p>
        <button onClick={postToApi}>Create Post</button>
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
                error
                ? <p>{error}</p>
                : <h4>Loading posts ...</h4>
            )
        }
        <hr />
    </div>
  )
}

 
export default HTTPHooks