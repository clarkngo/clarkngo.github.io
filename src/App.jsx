import { createHashRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Professional from './pages/Professional';
import Courses from './pages/Courses';
import Proposal from './pages/Proposal';
import Volunteer from './pages/Volunteer';
import Workshops from './pages/Workshops';
import Profile from './pages/Profile';
import Mentor from './pages/Mentor';

const BlogsRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://clarkngo.github.io/blogs';
  }, []);
  return null;
};


const NotesRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://clarkngo.github.io/my-learning-notes/';
  }, []);
  return null;
};

const ResearchRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://clarkngo.github.io/research';
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
      { path: 'profile', element: <Profile /> },
      { path: 'blogs', element: <BlogsRedirect /> },
      { path: 'courses', element: <Courses /> },
      { path: 'research', element: <ResearchRedirect /> },
      { path: 'mentor', element: <Mentor /> },
      { path: 'proposal', element: <Proposal /> },
      { path: 'volunteer', element: <Volunteer /> },
      { path: 'workshops', element: <Workshops /> },
      { path: 'notes', element: <NotesRedirect /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;