
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Blog from '../pages/Blog';
import { Blogs } from '../pages/Blogs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Proceted from '../pages/Proceted';
import Error from '../pages/Error';

const Comp3 = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    return (
        <BrowserRouter>
            <Navbar />
            {isLoggedIn ? <button onClick={() => {
                setisLoggedIn(!isLoggedIn)
            }}>Log Out</button> : <button onClick={() => {
                setisLoggedIn(!isLoggedIn)
            }}>Log In</button>}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Blog' element={
                    <Blog />
                } />
                <Route path='/Blog/:title' element={<Blogs />} />
                <Route path='/Contact' element={
                    <Proceted isLoggedIn={isLoggedIn}>
                        <Blog />
                    </Proceted>
                } />
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Comp3