//import React from 'react'
//import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import ErrorPage from '../pages/ErrorPage';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>
    },
  ]);