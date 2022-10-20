import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Errorpage from './components/ErrorPage/Errorpage';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => { return fetch ('https://openapi.programming-hero.com/api/quiz')},
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: () => { return fetch ('https://openapi.programming-hero.com/api/quiz')},
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/quiz/:id',
          element: <Quiz></Quiz>
        }
      ]
    },
    {
      path: '*',
      element: <Errorpage></Errorpage>
    }
  ]);

  return (
    
    < div className = "App" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
