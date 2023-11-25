import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Especialidades from './Routes/Especialidades';
import Minhaconta from './Routes/Minhaconta';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "especialidades",
    element: <Especialidades />
  },
  {
    path: "minhaconta",
    element: <Minhaconta />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
