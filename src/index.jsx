import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.scss';
import { App } from './App';
import { ErrorPage } from "./error-page";
import { BestPodcast } from './pages/best-podcast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <BestPodcast /> },
          {
            index: true,
            path: 'best-podcast',
            element: <BestPodcast />
          }
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={ router } />
);
