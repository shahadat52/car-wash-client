import { NavLink, Outlet } from "react-router-dom";
import { TUser } from "../Interface/user";
import { useAppSelector } from "../redux/hooks";


const Dashboard = () => {
    const user = useAppSelector((state) => state.auth.user) as TUser | null;
    console.log(user);
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
                        <div className="flex flex-col gap-2">
                            <li><NavLink to={'/dashboard/service'}>Service Management</NavLink></li>
                            <li><NavLink to={'/dashboard/slot'}>Slot Management</NavLink></li>
                            <details className="dropdown">
                                <summary className="mb-2" >User Management</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-2">
                                    <li> <NavLink to={'/dashboard/user'}>All Users</NavLink></li>
                                    <li> <NavLink to={'/dashboard/bookings'}>Booking Management</NavLink></li>
                                </ul>
                            </details>
                        </div>
                    }
                    {
                        user?.role === 'user' &&
                        <div className="flex flex-col gap-2">
                            <li><NavLink to={`/dashboard/profile/${user?.id}`}>Update Your Profile</NavLink></li>
                            <li><NavLink to={'/dashboard/my-bookings'}>Your Bookings</NavLink></li>
                        </div>
                    }

                </ul>
            </div >
        </div >
    );
};

export default Dashboard;