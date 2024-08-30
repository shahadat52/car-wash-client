import { useForm, FieldValues } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetUserByIdQuery, useUpdateProfileMutation } from '../../redux/features/user/userApi';
import { useState } from 'react';
import { toast } from 'sonner';


const ProfileUpdate = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const { data: userData, } = useGetUserByIdQuery(id);
    const [updateProfile, result] = useUpdateProfileMutation()
    const user = userData?.data

    const onSubmit = async (fieldData: FieldValues) => {
        const toastId = toast.loading('User creating', { duration: 2000 })
        // Handle profile update logic
        const userData = {
            id,
            user: {
                address: fieldData?.address || user?.address,
                email: fieldData?.email || user?.email,
                name: fieldData?.name || user?.name,
                phone: fieldData?.phone || user?.phone
            }
        }
        console.log(userData);
        try {
            const res = await updateProfile(userData);

            if (res?.data) {
                toast.success('Successful', { id: toastId, duration: 1000 })
            } else if (res?.error) {
                toast.error(`Operation Failed`, { id: toastId, duration: 1000 });
            }
        } catch (error: any) {
            toast.error(`${error.data.message}`, { id: toastId, duration: 1000 })
        }
    };

    console.log(result);
    return (
        <div className="p-6  min-h-screen bg-gray-300">
            <h1 className="text-3xl font-semibold mb-6">User Dashboard</h1>

            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl mb-4">Account Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            defaultValue={user?.name}
                            className="uppercase mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                            {...register('name')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            defaultValue={user?.email}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                            {...register('email')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            defaultValue={user?.phone}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                            {...register('phone')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            defaultValue={user?.address}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                            {...register('address')}
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Update Profile</button>
                </form>
            </div>
        </div>

    );
};

export default ProfileUpdate;

{/* Past Bookings */ }
{/* <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl mb-4">Past Bookings</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Service</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through past bookings here */}
{/* <tr>
                            <td className="border px-4 py-2">Teeth Cleaning</td>
                            <td className="border px-4 py-2">2024-08-01</td>
                            <td className="border px-4 py-2">Completed</td>
                        </tr>
                    </tbody>
            //     </table> }
            // </div> }

            {/* Upcoming Bookings */}
{/* <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4">Upcoming Bookings</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
{/* Map through upcoming bookings here */ }
{/* <div className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Teeth Whitening</h3>
                        <p className="mt-2 text-gray-500">2024-09-15</p>
                        <p className="mt-2 text-gray-500">10:00 AM</p>
                        <div className="mt-4 text-red-500"> */}
{/* Implement a countdown timer */ }
{/* Countdown: 15 days */ }
{/* </div>
                    </div>
                </div>
            </div> */}