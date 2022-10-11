import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizShow from '../QuizShow/QuizShow';

const Quiz = () => {
    const quizs = useLoaderData();
    // console.log(quiz);
    return (
        <div>
            {/* <h1>quiz:{quiz.data.name}</h1>
            <h1>quiz:{quiz.data.questions.length}</h1> */}
            <div>
              {
                quizs.data.questions.map(quiz =><QuizShow  quiz={quiz}></QuizShow>)
              }
        </div>
        </div>
    );
};

export default Quiz;