import { NavLink, Outlet } from "react-router-dom";
import { TUser } from "../Interface/user";
import { useAppSelector } from "../redux/hooks";


const Dashboard = () => {
    const user = useAppSelector((state) => state.auth.user) as TUser | null
    console.log(user?.role);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {
                        user?.role === 'admin' &&
                        <div className="flex flex-col gap-5">
                            {/* <details className="dropdown">
                                <summary className="">Service Management</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <NavLink to={'/dashboard/service'}>Create Service</NavLink>
                                    <NavLink to={'/dashboard/service'}>Create Service</NavLink>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </details> */}
                            <NavLink to={'/dashboard/service'}>Service Management</NavLink>
                            <NavLink to={'/dashboard/slot'}>Slot Management</NavLink>
                            <NavLink to={'/dashboard/user'}>User Management</NavLink>
                        </div>
                    }
                    {
                        user?.role === 'user' &&
                        <div>
                            <li><a>Update Your Profile</a></li>
                            <li><a>Your Bookings</a></li>
                        </div>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;