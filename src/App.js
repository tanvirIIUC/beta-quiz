import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import Main from '../src/Layout/Main'

import Topics from './Componenet/Topics/Topics';
import Statistics from './Componenet/Statistics/Statistics';
import Blog from './Componenet/Blog/Blog';
import Reacts from './Componenet/React/Reacts';
import Quiz from './Componenet/Quiz/Quiz';
import Home from './Componenet/Home/Home';


function App() {
     const router = createBrowserRouter(
      [
        {
          path : '/',
          element: <Main></Main>,
          children: [
            {
              path : '/',
              loader: () =>fetch('https://openapi.programming-hero.com/api/quiz'),
              element: <Home></Home>
            },
            {
              path : '/topic',
              loader: () =>fetch('https://openapi.programming-hero.com/api/quiz'),
              element: <Topics></Topics>
            },
            {
             path:'/statistics',
             loader: () =>fetch('https://openapi.programming-hero.com/api/quiz'),
             element:<Statistics></Statistics>
            },
            {
              path:'/blog',
              element:<Blog></Blog>
            },
            {
              path: '/topic/:topicId',
              loader: async ({params}) => {
                // console.log(params)
                
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
              },
            
              element : <Quiz></Quiz>
            },

          ] 
        }

      ]
     )
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>

        {/* <Home></Home> */}
     
    
     
         </div>
  );
}

export default App;
