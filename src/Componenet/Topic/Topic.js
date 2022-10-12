import React from 'react';
import { Link } from 'react-router-dom';
import Reacts from '../React/Reacts';
import { AiOutlineArrowRight } from "react-icons/ai";
const Topic = ({topic}) => {
    const {id,name,logo,total}= topic;
    
    return (
        <div className=' mt-5 border mx-5  rounded-3 '>
            <div className='bg-secondary rounded-3'>
                <img className='w-100 rounded-3' src={logo} alt="" />
            </div>
            <div className='d-flex justify-content-between p-3'>
                <p className='fw-bold'>{name}</p>
                <p>Ques :{total}</p>
                <p className='bg-primary px-3 text-light rounded'><Link className='text-light text-decoration-none' to={`/topic/${id}`}> practic <AiOutlineArrowRight/></Link></p>
                
            </div>
            
        </div>
    );
};

export default Topic;