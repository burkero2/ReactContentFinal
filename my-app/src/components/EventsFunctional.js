import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("function click")
    }


    return (
        <div>
            <h5>6. Events Functional </h5>
            <button onClick = {clickHandler}>Click Me - Function</button>
            <hr></hr>
        </div>
    )
}

export default EventsFunctional
