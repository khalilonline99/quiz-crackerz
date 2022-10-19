import React, { useState } from 'react';

const QuizOptions = (props) => {
    const { option, correctAnswer } = props;
    const [answer, setAnswer] = useState('');

    // const checkAnswer = (e) => {
    //     setAnswer(e.target.value);
    // }

    // const sendAnswer = (answer) => {
    //     props.sendAnswer(answer);
    //     console.log(answer);
    // }

    return (
        <div>
            <input type="radio" name="fav_language" value={option} onChange={(e) => setAnswer(e.target.value) } onClick={(e)=> props.sendAnswer(e.target.value)}/> {option}
            
        </div>
    );
};

export default QuizOptions;