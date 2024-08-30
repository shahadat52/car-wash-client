/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ColorRing } from 'react-loader-spinner';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../redux/features/auth/authApi';
import { toast } from 'sonner';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm()
    const [signUp] = useSignUpMutation()
    const navigate = useNavigate()

    const handleForm = async (data: FieldValues) => {
        setLoading(true)
        const toastId = toast.loading('User creating', { duration: 2000 })
        try {
            const res = await signUp(data)

            if (res?.data) {
                toast.success('Successful', { id: toastId, duration: 1000 })
                navigate('/login')
            } else if (res?.error) {
                toast.error(`Operation Failed`, { id: toastId, duration: 1000 })
            }
        } catch (error: any) {
            console.log(error);
            toast.error(`${error.data.message}`, { id: toastId, duration: 1000 })
            setLoading(false)
        }
        setLoading(false)
    }
    return (
        <div className=" flex justify-center items-center h-[100vh] ">

            <form onSubmit={handleSubmit(handleForm)} className="shadow-lg py-20 pb-5 px-14 rounded-md bg-gray-200">
                <h1 className="font-bold text-center mb-10">Sign up your Account</h1>
                <div>
                    <p>Name</p>
                    <input type="text" placeholder="Enter Name" className="input input-bordered w-full max-w-xs" autoComplete="Name" {...register('name')} required />
                </div>
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
                <p>Already have account, so please <NavLink to='/Login' className='font-bold link uppercase'>Login</NavLink></p>
            </form>
        </div>
    );
};

export default Register;