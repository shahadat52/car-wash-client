import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import ServiceDetails from "../components/ServiceDetails";

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
                element: <Services />
            },
            {
                path: '/booking',
                element: <Booking />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <Register />
            },
            {
                path: '/services/:id',

                element: <ServiceDetails />
            }
        ]
    }
])