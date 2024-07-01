import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home/Home';
import Error from './Pages/Error';
import AllArts from './Pages/AllArts/AllArts';
import AddCraft from './Pages/AddCraft/AddCraft';
import MyArts from './Pages/MyArts/MyArts';
import Login from './Pages/Login-Register/Login';
import Register from './Pages/Login-Register/Register';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import CraftDetails from './Pages/CraftDetails/CraftDetails';
import UpdateCrafts from './Pages/MyArts/UpdateCrafts';
import ViewSubCat from './Pages/ViewSubCat/ViewSubCat';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-rq-2-server.vercel.app/items')
      },
      {
        path: "/allarts",
        element: <AllArts></AllArts>,
        loader: () => fetch('https://assignment-10-rq-2-server.vercel.app/items')
      },
      {
        path: "/addcraft",
        element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
      },
      {
        path: "/myarts",
        element: <PrivateRoutes><MyArts></MyArts></PrivateRoutes>,
        loader: () => fetch('https://assignment-10-rq-2-server.vercel.app/items')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/items/:id",
        element: <PrivateRoutes><CraftDetails></CraftDetails></PrivateRoutes>,
        loader: () => fetch(`https://assignment-10-rq-2-server.vercel.app/items`)
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><UpdateCrafts></UpdateCrafts></PrivateRoutes>,
        loader: () => fetch(`https://assignment-10-rq-2-server.vercel.app/items`)
      },
      {
        path: "/subCatDetails/:subcategoryName",
        element: <ViewSubCat></ViewSubCat>
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
