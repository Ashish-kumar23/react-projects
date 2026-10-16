import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import User from './User/User.jsx';
import Layout from './Layout.jsx';
import Contact from './Components/ContactUs/contactus.jsx';
import { createBrowserRouter, RouterProvider } from "react-router";
import Github, { githubinfoLoader } from './Components/Github/Github.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "user/:userId",
        element: <User/>,
      },
      {
        loader:githubinfoLoader,
        path:"github",
        element: <Github/>,
      }
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
)
