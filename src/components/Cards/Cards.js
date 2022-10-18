import React from 'react';
import './Cards.css'

const Cards = ({ singleCard }) => {
    console.log(singleCard);

    return (
        <div className='card-container'>
            <img src={singleCard.logo} alt="" />
            <p>Name: {singleCard.name}</p>
            <p>Total: {singleCard.total}</p>
        </div>

    );
};

export default Cards;