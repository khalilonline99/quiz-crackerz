import React, { useState } from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import './QuizQuestions.css'

const QuizQuestions = ({ questions }) => {
    console.log(questions);
    const { options, question, correctAnswer } = questions;
    const [givenAnswer, setGivenAnswer] = useState('');
    
    const sendAnswer = (answer) => {
        console.log(answer, "is given by student");
        setGivenAnswer(answer)
    }

    return (
        <div>
            <h3>Question: {question}</h3>
            <div className='options-container'>
                {
                    options.map(option => <QuizOptions
                        correctAnswer = {correctAnswer}
                        option={option}
                        sendAnswer = {sendAnswer}
                    ></QuizOptions>)
                }
                
                
            </div>
            <div className='answer-remark'>
                {
                    givenAnswer !== correctAnswer ? <div>Remarks: Please choose the correct answer.</div> : <div>Correct Answer!</div> 
                }
                </div>
            
        </div>
    );
};

export default QuizQuestions;