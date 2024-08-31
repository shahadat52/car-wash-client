/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from 'jwt-decode';
import { TUser } from '../Interface/user';
import { useAppSelector } from '../redux/hooks';
import { Navigate, useLocation } from 'react-router-dom';

const AdminPrivetRoute = ({ children }: any) => {
    // const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    const { token } = useAppSelector(state => state.auth)
    // if(loading){
    //     return <DnaLoader/>
    // }

    const user: TUser = jwtDecode(token as unknown as string);
    if (user.role === 'admin') {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />;

};

export default AdminPrivetRoute;