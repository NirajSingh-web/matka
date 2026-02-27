import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from "react-router-dom"
import { routerList } from './constant/Route';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './constant/queryClient';
import { UserProvider } from './constant/UserProvider';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ToastContainer />
        <RouterProvider router={routerList} />
      </UserProvider>
    </QueryClientProvider>

  </>
)
