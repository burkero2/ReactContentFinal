import React from 'react'

function MethodsAsPropsChild(props) {


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
                            <button onClick = {props.handleSignOut}>Sign Out</button>
                        </div>
                    ) : (
                        <div>
                            <h1>Please Sign In</h1>
                            <button onClick = {props.handleSignIn}>Sign In</button>
                        </div>
                    )
                }
        </div>
    )
}

export default MethodsAsPropsChild
