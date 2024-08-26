import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={'/home'}><p>Home</p></NavLink>
                            <NavLink to={'#'}><a>Service</a></NavLink>
                            <NavLink to={'#'}><a>Booking</a></NavLink>
                            <NavLink to={'#'}>Dashboard</NavLink>
                            <NavLink to={'#'}><a>Login</a></NavLink>

                        </ul>
                    </div>
                    <NavLink to={'/'} className="hidden  lg:flex font-bold text-xl">Car Wash</NavLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <NavLink to={'#'} className="mr-5">Home</NavLink>
                        <NavLink to={'#'}><a>Service</a></NavLink>
                        <NavLink to={'#'}><a>Booking</a></NavLink>
                        <NavLink to={'#'} className="mr-5">Dashboard</NavLink>
                        <NavLink to={'#'} className="mr-5"><a>Login</a></NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;