import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div  className='text-center'>      
        <div className='d-sm-flex align-items-center m-5 border bg-Light rounded-3'>
            <div>
               <img className='w-25' src='quiz-comic-pop-art-style_175838-505.webp' alt="" />
            </div>
            <div>
                <h2>Welcome To Beta</h2>
               <p>
                  This is BETA QUIZ. This website help to test yourself. In this website consist four items.
                  React,JavaScript,Css,Git. In this website include some quiz question and also provide ans.
               </p>
            </div>
        </div>
         <h3>All Topics</h3>
        <div className='d-sm-flex my-5 '>
                  {
                    
                     topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                  }
        </div> 
    </div>
    );
};

export default Home;