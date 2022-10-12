import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizShow from '../QuizShow/QuizShow';

const Quiz = () => {
    const quizs = useLoaderData();
    // console.log(quiz);
    return (
        <div className=''>
           
            <div className='text-center my-5'><h2>{quizs.data.name} Quiz</h2></div> 
            <div>
              {
                quizs.data.questions.map(quiz =><QuizShow  quiz={quiz}></QuizShow>)
              }
        </div>
        </div>
    );
};

export default Quiz;