import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {
                    props.isLoggedIn ? (
                        <div>
                            <p>Welcome to the site! Please complete the steps below.</p>
                            <ol>
                                <li>Confirm your email</li>
                                <li>Complete your profile</li>
                                <li>Subscribe to the newsletter</li>
                            </ol>
                        </div>
                    ) : (
                        <div>
                            <h1>Please Sign In</h1>
                        </div>
                    )
                }
        </div>
    )
}

export default UserMessage
