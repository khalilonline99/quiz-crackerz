import React from 'react';

const QuizOptions = ({option}) => {
    console.log(option);
    return (
        <div>
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <h5>{option}</h5>
        </div>
    );
};

export default QuizOptions;