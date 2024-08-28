import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import ServiceDetails from "../components/ServiceDetails";
import Booking from "../components/Booking";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import PrivetRoute from "./PrivetRoute";
import ServiceManagement from "../components/ServiceManagement";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivetRoute><App /></PrivetRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/dashboard',
                element: <PrivetRoute><Dashboard /></PrivetRoute>,
                children: [
                    {
                        path: '/dashboard/service',
                        element: <ServiceManagement />
                    }
                ]
            },
            {
                path: '/booking',
                element: <Bookings />
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />
            },
            {
                path: '/booking/:id',
                element: <Booking />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <Register />
    }
])