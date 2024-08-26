import { useState } from "react";
import { useForm, FieldValues, } from "react-hook-form"
import { ColorRing } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm()

    const handleForm = (data: FieldValues) => {
        setLoading(true)
        console.log(data);
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
                <p>If you have no account <NavLink to='/register' className='font-bold link uppercase'>Register</NavLink></p>
            </form>
        </div>
    );
};

export default Login;