import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <h2><Link to='/'>Knowledge Checker</Link></h2>
            </div>

            <div>

                <NavLink to='/' end>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                
            </div>

        </div>
    );
};

export default Header;