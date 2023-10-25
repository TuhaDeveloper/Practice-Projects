import React from 'react'
import { Navigate } from 'react-router-dom'

const Proceted = ({ isLoggedIn, children }) => {

    if (!isLoggedIn) {
        alert('if you want go to this page you have to log in ')

        return <Navigate to='/' replace />

    }

    return children;

}

export default Proceted