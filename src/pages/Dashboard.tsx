import { TUser } from "../Interface/user";
import { useAppSelector } from "../redux/hooks";


const Dashboard = () => {
    const user = useAppSelector((state) => state.auth.user) as TUser | null
    console.log(user?.role);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {
                        user?.role === 'admin' &&
                        <div>
                            <li><a>Service Management</a></li>
                            <li><a>Slot Management</a></li>
                            <li><a>User Management</a></li>
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