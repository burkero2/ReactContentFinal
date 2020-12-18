import React from 'react'

function UserData(props) {
    return (
        <div>
            <h1>{props.isLoaded ? "Data Loaded" : "Data Not Loaded"}</h1>
        </div>
    )
}

export default UserData
