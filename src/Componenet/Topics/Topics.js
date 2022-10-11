
import {useLoaderData} from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
   
    return (
        <div>
            {/* <h1>topic : {topics.data.length}</h1> */}
           
            <div className='d-sm-flex justify-content-center mx-sm-5 mt-5 '>
                
              
                      {
                        
                         topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                      }
                 
                
                
            
            </div>
            
        </div>
    );
};

export default Topics;