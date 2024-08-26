import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/services',
                element: <Service />
            },
            {
                path: '/booking',
                element: <Booking />
            },
            {
                path: '/login',
                element: <Login />
            }
            ,
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])