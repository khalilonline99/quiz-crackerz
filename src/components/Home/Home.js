import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Hero from '../Hero/Hero';

const Home = () => {
    const quizCard = useLoaderData();
    // console.log(quizCard);
    const quizCards = quizCard.data
    return (
        <div>
            <Hero></Hero>
            {
               quizCards.map(singleCard => <Cards singleCard={singleCard}></Cards>)
            }
        </div>
    );
};

export default Home;