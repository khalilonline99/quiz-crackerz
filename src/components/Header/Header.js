import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <div>
                <h2>Knowledge Checker</h2>
            </div>

            <div>

                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>

        </div>
    );
};

export default Header;