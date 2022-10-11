import React from 'react';
import { Link } from 'react-router-dom';
import Reacts from '../React/Reacts';
const Topic = ({topic}) => {
    const {id,name,logo}= topic;
    
    return (
        <div className=' mt-5 border mx-5  rounded-3 '>
            <div className='bg-secondary rounded-3'>
                <img className='w-100 rounded-3' src={logo} alt="" />
            </div>
            <div className='d-flex justify-content-between p-3'>
                <p className=''>{name}</p>
                <p><Link to={`/topic/${id}`}> practic</Link></p>
                {/* <button onClick={handle} className='rounded-3' >Practic</button> */}
                {/* <Link  id={id} to='/reacts'>react</Link> */}
            </div>
            
        </div>
    );
};

export default Topic;