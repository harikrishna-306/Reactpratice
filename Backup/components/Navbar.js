import {Link} from 'react-router-dom';

import React from 'react'

function Navbar() {
    return (
        <nav className='navbar navar-dark bg-dark'>
            <div>
            <Link to="home">Home page</Link>
            <Link to="about">About page</Link>
            <Link to="contact">Contact page</Link>
            </div>  
        </nav>
    )
}

export default Navbar;
