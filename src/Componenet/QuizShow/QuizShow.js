import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye } from "react-icons/ai";

const QuizShow = ({quiz}) => {
    const {id,correctAnswer} = quiz;

    function ans(){
        toast(correctAnswer);
    }
     console.log(quiz);
    return (
        <div className='p-5 border rounded m-5 bg-info d-flex justify-content-between'>
            
            <div className=''>
            <h4>Ques : {quiz.question.slice(3,quiz.question.length-4 )}</h4>
            
            <div>
                {
                      quiz.options.map(option =><QuizOption option={option} correctAnswer={quiz.correctAnswer}></QuizOption>)
                }
            
            </div>
            </div>
            <div >
                
                <p className='width: 50%' onClick={ans}> <AiOutlineEye />  </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default QuizShow;