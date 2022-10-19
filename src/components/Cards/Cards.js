import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const Cards = ({ singleCard }) => {
    console.log(singleCard);
    const {logo, name, total, id} = singleCard;

    return (
        
        <div className='card-container'>
            <Link to={`quiz/${id}`}>
            <img src={logo} alt="" />
            <p>Name: {name}</p>
            <p>Total: {total}</p>
            </Link>
        </div>

    );
};

export default Cards;