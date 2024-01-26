//import React from 'react'
//import ReactDOM from 'react-dom/client'

import {createBrowserRouter,} from "react-router-dom";

import ErrorPage from '../pages/ErrorPage';
import App from '../App';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>
    },
  ]);