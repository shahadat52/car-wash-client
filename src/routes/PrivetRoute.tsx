/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '../redux/hooks';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }: any) => {
    // const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    const { token } = useAppSelector(state => state.auth)
    // if(loading){
    //     return <DnaLoader/>
    // }
    if (token) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivetRoute;