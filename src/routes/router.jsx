import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Feedback from '../pages/Feedback';
// import About from '../pages/About';

// import Home from '../components/home/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/skills',
        element: <Skills></Skills>,
      },
      {
        path: '/Projects',
        element: <Projects></Projects>,
      },
      {
        path: '/feedback',
        element: <Feedback></Feedback>,
      },
      {
        path: '/Contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);
