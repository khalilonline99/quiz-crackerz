import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import Cards from '../Cards/Cards';
import QuizQuestions from '../QuizQuestions/QuizQuestions';
import './Quiz.css'

const Quiz = () => {
    const { id } = useParams()
    const { data } = useFetch(`https://openapi.programming-hero.com/api/quiz/${id}`)

    return (
        <div>
            {data && (
                <div className='quiz'>
                    <h3> Quiz for {data.data.name} </h3>
                    <img src={data.data.logo} alt="" />
                    {
                        data.data.questions.map(questions => <QuizQuestions
                            key={questions.id}
                            questions={questions}></QuizQuestions>)
                    }
                </div>
            )}
        </div>
    );
};

export default Quiz;