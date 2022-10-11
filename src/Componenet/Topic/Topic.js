import React from 'react';

const Topic = ({topic}) => {
    const {id,name,logo}= topic;
    console.log(topic);
    return (
        <div className='ms-5 mt-5 border'>
            <div>
                <img className='w-100' src={logo} alt="" />
            </div>
            <div className='d-flex justify-content-between'>
                <p>{name}</p>
                <button>Practic</button>
            </div>
            
        </div>
    );
};

export default Topic;