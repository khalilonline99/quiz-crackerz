import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Quiz from './components/Quiz/Quiz';

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
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
      ]
    }
  ]);

  return (
    
    < div className = "App" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
