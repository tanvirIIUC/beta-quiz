import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import Main from '../src/Layout/Main'

import Topics from './Componenet/Topics/Topics';
import Statistics from './Componenet/Statistics/Statistics';
import Blog from './Componenet/Blog/Blog';


function App() {
     const router = createBrowserRouter(
      [
        {
          path : '/',
          element: <Main></Main>,
          children: [
            {
              path : '/',
              element: <Topics></Topics>
            },
            {
             path:'/statistics',
             element:<Statistics></Statistics>
            },
            {
              path:'/blog',
              element:<Blog></Blog>
            }

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
