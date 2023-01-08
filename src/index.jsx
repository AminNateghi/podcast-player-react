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
import { PodcastDetails } from './pages/podcast-details';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './constant/query.const';

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
          },
          {
            path: 'podcast',
            element: <PodcastDetails />,
          },
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={ router } />
  </QueryClientProvider>
);
