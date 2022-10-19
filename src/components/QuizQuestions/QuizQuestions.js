import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import './QuizQuestions.css'

const QuizQuestions = ({questions}) => {
    console.log(questions);
    const {options, question} = questions;
    let no = 0;

    return (
        <div>
            <h3>Question: {question}</h3>
            <div className='options-container'>
            {
                options.map(option => <QuizOptions option = {option} ></QuizOptions>)
            }
            </div>
        </div>
    );
};

export default QuizQuestions;