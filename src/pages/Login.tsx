/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm, FieldValues, } from "react-hook-form"
import { ColorRing } from "react-loader-spinner";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { TUser } from "../Interface/user";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm()
    const [login] = useLoginMutation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleForm = async (data: FieldValues) => {
        setLoading(true)
        const toastId = toast.loading('User creating', { duration: 2000 })

        try {
            const res = await login(data).unwrap()
            const user = jwtDecode(res?.token) as TUser;
            const userInfo = { email: user?.email, role: user?.role, token: res.token }
            console.log(userInfo);
            if (user) {
                dispatch(setUser(userInfo))
            }
            toast.success('Successful', { id: toastId, duration: 1000 })
            navigate('/login')
        } catch (error: any) {
            console.log(error);
            toast.error(`failed`, { id: toastId, duration: 1000 })
        }
        setLoading(false)
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