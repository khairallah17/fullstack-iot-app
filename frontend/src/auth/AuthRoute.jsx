import React from 'react'

const AuthRoute = ({children, authenticated = false}) => {

    console.log(authenticated)

    if (authenticated) {
        return (
            children
        )
    } else {
        return (
            <h1 className='text-7xl'>
                not authenticated
            </h1>
        )
    }
}

export default AuthRoute