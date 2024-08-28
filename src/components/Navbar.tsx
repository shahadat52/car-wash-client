import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/features/auth/authSlice";

const Navbar = () => {
    const { token, user } = useAppSelector(state => state?.auth)
    console.log(token, user);
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div>
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* Responsive part */}
                        <ul
                            tabIndex={0}
                            className="flex flex-col gap-5 text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={'/'} className="mr-5">Home</NavLink>
                            <NavLink to={'/services'} className="mr-5">Services</NavLink>
                            <NavLink to={'#'} className="mr-5">Booking</NavLink>
                            <NavLink to={'/reviews'} className="mr-5">Reviews</NavLink>
                            <NavLink to={'/dashboard'} className="mr-5">Dashboard</NavLink>
                            {
                                token && user ? <NavLink to={'/login'} className="">Logout</NavLink> : <NavLink to={'/login'} className="">Login</NavLink>
                            }

                        </ul>
                    </div>
                    <NavLink to={'/'} className="hidden  lg:flex font-bold text-xl">Car Wash</NavLink>
                </div>
                <div className="navbar-end ">
                    <ul className="menu menu-horizontal hidden lg:flex">
                        <NavLink to={'/'} className="mr-5">Home</NavLink>
                        <NavLink to={'/services'} className="mr-5">Services</NavLink>
                        <NavLink to={'/booking'} className="mr-5">Booking</NavLink>
                        <NavLink to={'/reviews'} className="mr-5">Reviews</NavLink>
                        <NavLink to={'/dashboard'} className="mr-5">Dashboard</NavLink>
                        {
                            token && user ? <button onClick={handleLogOut} className="">Logout</button> : <NavLink to={'/login'} className="">Login</NavLink>
                        }

                    </ul>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                </div>


            </div>
        </div>
    );
};

export default Navbar;