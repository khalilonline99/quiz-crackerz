import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h3>404 error. Please return to <Link to='/'> Home Page</Link></h3>
        </div>
    );
};

export default Errorpage;