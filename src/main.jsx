import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import App from './App.jsx'
import HomeAll from './components/HomeAll.jsx'
import Classes from './components/Classes.jsx'
import Products from './components/Products.jsx'
import AboutUs from './components/AboutUs.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Checkout from './components/Checkout.jsx'
import Dashboard from './components/Dashboard.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <HomeAll/>
      },
      {
        path: "classes",
        element: <Classes/>
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "check",
        element: <Checkout />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      }



    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
