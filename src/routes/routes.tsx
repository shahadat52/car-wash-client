import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import ServiceDetails from "../components/ServiceDetails";
import Booking from "../components/Booking";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import PrivetRoute from "./PrivetRoute";
import ServiceManagement from "../components/ServiceManagement";
import SlotManagement from "../components/Slot/SlotManagement";
import UserManagement from "../components/User/UserManagement";
import Reviews from "../pages/Reviews";
import UserBookings from "../components/User/UserBookings";
import ProfileUpdate from "../components/profile/ProfileUpdate";
import MyBookings from "../components/my-bookings/MyBookings";
import AdminPrivetRoute from "./AdminPrivateRoute";

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
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/dashboard/',
                element: <PrivetRoute><Dashboard /></PrivetRoute>,
                children: [
                    {
                        path: '/dashboard/service',
                        element: <AdminPrivetRoute><ServiceManagement /></AdminPrivetRoute>
                    },
                    {
                        path: '/dashboard/slot',
                        element: <AdminPrivetRoute><SlotManagement /></AdminPrivetRoute>
                    },
                    {
                        path: '/dashboard/user',
                        element: <AdminPrivetRoute> <UserManagement /></AdminPrivetRoute>
                    },
                    {
                        path: '/dashboard/bookings',
                        element: <AdminPrivetRoute><UserBookings /></AdminPrivetRoute>
                    },
                    {
                        path: '/dashboard/profile/:id',
                        element: <ProfileUpdate />
                    },
                    {
                        path: '/dashboard/my-bookings/:id',
                        element: <MyBookings />
                    }
                ]
            },
            {
                path: '/booking',
                element: <MyBookings />
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