import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Professional from './pages/Professional';
import Blogs from './pages/Blogs';
import Courses from './pages/Courses';
import Research from './pages/Research';
import Proposal from './pages/Proposal';
import Volunteer from './pages/Volunteer';
import Workshops from './pages/Workshops';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'professional', element: <Professional /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'courses', element: <Courses /> },
      { path: 'research', element: <Research /> },
      { path: 'proposal', element: <Proposal /> },
      { path: 'volunteer', element: <Volunteer /> },
      { path: 'workshops', element: <Workshops /> },
    ],
  },
], {
  basename: import.meta.env.DEV ? '/' : '/clarkngo.github.io',
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;