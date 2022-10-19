import React, { useState } from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import './QuizQuestions.css'
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizQuestions = ({ questions }) => {
    // console.log(questions);
    const { options, question, correctAnswer } = questions;
    const [givenAnswer, setGivenAnswer] = useState('');

    const sendAnswer = (answer) => {
        console.log(answer, "is given by student");
        setGivenAnswer(answer)
    }

    const showAnswer = () => {
        toast.success(`Answer: ${correctAnswer}`)        
    }


    return (
        <div className='singla-QA-full'>
            <div className='single-QA'>
                <h3>Question: {question}</h3>
                <div className='options-container'>
                    {
                        options.map(option => <QuizOptions
                            correctAnswer={correctAnswer}
                            option={option}
                            sendAnswer={sendAnswer}
                        ></QuizOptions>)
                    }
                </div>

                <div className='answer-remark'>
                    {
                        givenAnswer !== correctAnswer ? <div>Remarks: Please choose the correct answer.</div> : <div>Correct Answer!</div>
                    }
                </div>
            </div>

            <div>
                <EyeIcon className='icon' onClick={() => showAnswer()} />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );  
};

export default QuizQuestions;