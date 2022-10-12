
import {useLoaderData} from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
   
    return (
        <div  className='text-center'>
            
           
             <h3>All Topics</h3>
            <div className='d-sm-flex my-5 '>
                
              
                      {
                        
                         topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                      }
                 
                
                
            
            </div>
            
        </div>
    );
};

export default Topics;