import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Booking from "../pages/Booking";

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
            }
        ]
    }
])