import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>

            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/Blog' className='nav-link'>Blog</NavLink>
            <NavLink to='/Contact' className='nav-link'>Contact</NavLink>
        </nav>
    )
}

export default Navbar