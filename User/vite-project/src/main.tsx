import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from "react-router-dom"
import { routerList } from './constant/Route';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './constant/queryClient';
createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerList} />
    </QueryClientProvider>
  </>
)
