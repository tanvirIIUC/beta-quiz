import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizShow = ({quiz}) => {
    const {id,correctAnswer} = quiz;

    function ans(){
        toast(correctAnswer);
    }
    // console.log(quiz);
    return (
        <div className='p-5 border m-5 bg-info d-flex justify-content-between'>
            <div className=''>
            <h4>Ques : {quiz.question}</h4>
            {/* <h2>Ques : {quiz.correctAnswer}</h2> */}
            <div>
                {
                      quiz.options.map(option =><QuizOption option={option} correctAnswer={quiz.correctAnswer}></QuizOption>)
                }
            
            </div>
            </div>
            <div >
                {/* <p>aaa</p> */}
                <p onClick={ans}> --- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                       </svg>
                </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default QuizShow;