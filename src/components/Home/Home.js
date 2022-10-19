import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Hero from '../Hero/Hero';
import './Home.css'

const Home = () => {
    const quizCard = useLoaderData();
    // console.log(quizCard);
    const quizCards = quizCard.data
    return (
        <div>
            <Hero></Hero>
            <div className='all-cards'>
            {
               quizCards.map(singleCard => <Cards singleCard={singleCard}></Cards>)
            }
            </div>
        </div>
    );
};

export default Home;