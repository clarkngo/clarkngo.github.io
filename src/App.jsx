import { createHashRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Professional from './pages/Professional';
import Courses from './pages/Courses';
import Research from './pages/Research';
import Proposal from './pages/Proposal';
import Volunteer from './pages/Volunteer';
import Workshops from './pages/Workshops';

const BlogsRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://clarkngo.github.io/blogs/';
  }, []);
  return null;
};

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'professional', element: <Professional /> },
      { path: 'blogs', element: <BlogsRedirect /> },
      { path: 'courses', element: <Courses /> },
      { path: 'research', element: <Research /> },
      { path: 'proposal', element: <Proposal /> },
      { path: 'volunteer', element: <Volunteer /> },
      { path: 'workshops', element: <Workshops /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;