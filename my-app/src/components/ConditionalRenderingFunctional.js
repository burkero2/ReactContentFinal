import React from 'react'

function ConditionalRenderingFunctional(props) {
    return (
        <div>
            <h5>9. Conditional Rendering Functional</h5>
            <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>
            <hr></hr>
        </div>
    )
}

export default ConditionalRenderingFunctional
