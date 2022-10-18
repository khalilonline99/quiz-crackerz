import React from 'react';
import headerOne from '../../images/hero-1.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-container'>
            <img src={headerOne} alt="Header Image" />
            <h3 className='text-on-header-image'>Check your Knowledge and gain more trust.</h3>
        </div>
    );
};

export default Hero;