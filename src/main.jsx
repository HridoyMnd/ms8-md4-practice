import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './my_components/Root/Root';
import Error from './my_components/ErrorPage/Error';
import Home from './my_components/Home/Home';
import Dashboard from './my_components/Dashboard/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
       {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
       }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
