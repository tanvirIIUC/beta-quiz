import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const QuizShow = ({quiz}) => {
    const {id,question} = quiz;
    // console.log(quiz);
    return (
        <div>
            <h4>Ques : {quiz.question}</h4>
            {/* <h2>Ques : {quiz.correctAnswer}</h2> */}
            <div>
                {
                      quiz.options.map(option =><QuizOption option={option} correctAnswer={quiz.correctAnswer}></QuizOption>)
                }
            
            </div>
        </div>
    );
};

export default QuizShow;