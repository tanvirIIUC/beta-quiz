import React from 'react';
import {useLoaderData} from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const info = useLoaderData();
    return (
        <div className=' p-sm-5 text-center '>
            <div><h1> Quiz statistics</h1></div>
            
            <ResponsiveContainer width={200} >
        
         <div className='container mt-5 ms-5  d-flex justify-content-center'>
            
            <LineChart  width={400} height={300} data={info.data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
              <Line type="monotone" dataKey="total" stroke="#8884d8" />
                   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                 <YAxis />
            </LineChart>
  
  
        </div>
        
       </ResponsiveContainer>
    
        </div>
    );
};

export default Statistics;