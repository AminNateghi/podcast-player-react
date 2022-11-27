import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';
import { App } from './App';
import { ErrorPage } from "./error-page";
import { BestPodcast } from './pages/best-podcast';
import { SearchResult } from './pages/search-result';

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
            path: 'best-podcast',
            element: <BestPodcast />,
          },
          {
            path: 'search',
            element: <SearchResult />,
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
