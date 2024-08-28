/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm, FieldValues, } from "react-hook-form"
import { ColorRing } from "react-loader-spinner";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { TUser } from "../Interface/user";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { token } = useAppSelector(state => state.auth)

    const dispatch = useAppDispatch()

    const [login] = useLoginMutation()

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            reset();
        }
    }, [token, navigate, from, reset]);



    const handleForm = async (data: FieldValues): Promise<void> => {
        const toastId = toast.loading('Logging in', { duration: 2000 })
        setLoading(true)
        const userData = {
            email: data.email,
            password: data.password
        }

        try {
            const res = await login(userData)
            if (res.data) {


                const token = (res as any)?.data?.token;
                toast.success(`${(res as any)?.data?.message}`, { id: toastId, duration: 2000 })

                // eslint-disable-next-line prefer-const
                let user: TUser = jwtDecode(token);
                const userToken = {
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    },
                    token
                }
                dispatch(setUser(userToken))
                setLoading(false)
            } else if (res.error) {
                toast.error(`${(res.error as any)?.data?.message}`, { id: toastId, duration: 2000 })
                setLoading(false)
            }

        } catch (error) {
            console.log(error);
            toast.error(`${(error as any)?.data?.message}`, { id: toastId, duration: 2000 })
            setLoading(false)
        }
    }
    return (
        <div className=" flex justify-center items-center h-[100vh] ">

            <form onSubmit={handleSubmit(handleForm)} className="shadow-lg py-20 pb-5 px-14 rounded-md bg-gray-200">
                <h1 className="text-center mb-10 uppercase font-bold">Login your Account</h1>
                <div>
                    <p>Email</p>
                    <input type="text" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" autoComplete="email" {...register('email')} required />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" autoComplete="password"  {...register('password')} required />
                </div>
                <div className="w-full flex justify-center mt-10" >

                    {
                        loading ? <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        /> : <input type="submit" className="input input-bordered " />


                    }

                </div>
                <p>If you have no account <NavLink to='/signUp' className='font-bold link uppercase'>Register</NavLink></p>
            </form>
        </div>
    );
};

export default Login;