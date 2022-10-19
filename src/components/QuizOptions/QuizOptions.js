import React, { useState } from 'react';

const QuizOptions = ({ option }) => {
    const [answer, setAnswer] = useState('');
    console.log(answer);

    return (
        <div>
            <input type="radio" name="fav_language" value={option} onChange={e => setAnswer(e.target.value)} /> {option}
        </div>
    );
};

export default QuizOptions;