/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-binary-expression */
import { useNavigate, useParams } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useGetServiceByIdQuery } from "../redux/features/service/serviceApi";
import { useAppSelector } from "../redux/hooks";
import { TUser } from "../Interface/user";
import { TSlot } from "../Interface/TSlots";
import { TService } from "../Interface/TService";
import { useCreateBookingMutation } from "../redux/features/booking/bookingApi";
import { vehicleType } from "../constant";
import { toast } from "sonner";

type TBookingData = {
    customer: string;
    service: string;
    slot: string;
    registrationPlate: string;
    manufacturingYear: string;
    vehicleModel: string;
    vehicleBrand: string;
    vehicleType: string;
    selectedTime?: string;
};

const Booking = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { data } = useGetServiceByIdQuery(id);
    const user = useAppSelector(state => state.auth.user) as TUser | null;
    const slot = useAppSelector(state => state.booking.slot) as TSlot | null;
    const service: TService = data?.data;
    const [bookingService, result] = useCreateBookingMutation()


    const { register, handleSubmit, formState: { errors } } = useForm<TBookingData>({
        defaultValues: {
            customer: user?.id || "",
            service: service?._id || "",

            selectedTime: `START ${slot?.startTime} - END ${slot?.endTime}` || "",
        }
    });

    const onSubmit = async (data: FieldValues) => {
        const bookingData: TBookingData = {
            customer: user?.id as string,
            service: service?._id,
            slot: slot?._id as string,
            manufacturingYear: data?.manufacturingYear,
            vehicleModel: data?.vehicleModel,
            vehicleBrand: data.vehicleBrand,
            registrationPlate: data?.registrationPlate,
            vehicleType: data?.vehicleType


        }

        const toastId = toast.loading('User creating', { duration: 2000 })

        try {
            const res: any = await bookingService(bookingData)

            if (res?.data) {
                toast.success('Successful', { id: toastId, duration: 1000 })
                navigate('/booking')
            } else if (res?.error) {
                toast.error(`${res?.error?.data?.message}`, { id: toastId, duration: 1000 })
            }
        } catch (error: any) {
            console.log(error);
            toast.error(`${error.data.message}`, { id: toastId, duration: 1000 });
        }
        // Redirect to AAMARPAY with the necessary payment data
        // window.location.href = `https://sandbox.aamarpay.com?userName=${data.name}&email=${data.email}&serviceName=${service?.name}&selectedSlot=${data.selectedTime}`;

        // Assume payment was successful and update the booking status
        // onPaymentSuccess();
    };
    console.log(result);
    return (
        <div className="py-2 flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-800">
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Confirm Your Booking</h1>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side Slot and Service */}
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 ">
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-700">Selected Service</h2>
                            <p className="mt-2 text-lg text-gray-600">{service?.name}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700">Selected Time Slot</h2>
                            <p className="mt-2 text-lg text-gray-600">{`START ${slot?.startTime} - END ${slot?.endTime}`}</p>
                        </div>
                    </div>

                    {/* Right Side - User Form */}
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold text-gray-700">Your Information</h2>
                        <div>
                            <div className="my-5 ">
                                <label className="block text-gray-600 text-sm">Name</label>
                                <p className="uppercase font-medium">{user?.name}</p>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-600 text-sm">Email</label>
                                <p>{user?.email}</p>

                            </div>

                        </div>
                    </div>
                </div>

                {/*Vehicle info Form */}
                <div>
                    <h1 className="text-center font-bold text-4xl">Vehicle Information</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <hr className="mb-5" />
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm">Registration Plate</label>
                            <input
                                {...register("registrationPlate", { required: true })}
                                type="text"
                                className="mt-2 p-3 border rounded-xl w-full text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter registration plate"
                            />
                            {errors.registrationPlate && <span className="text-red-500 text-sm">Registration plate is required</span>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm">Manufacturing Year</label>
                            <input
                                {...register("manufacturingYear", { required: true })}
                                type="text"
                                className="mt-2 p-3 border rounded-xl w-full text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter manufacturing year"
                            />
                            {errors.manufacturingYear && <span className="text-red-500 text-sm">Manufacturing year is required</span>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm">Vehicle Model</label>
                            <input
                                {...register("vehicleModel", { required: true })}
                                type="text"
                                className="mt-2 p-3 border rounded-xl w-full text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter vehicle model"
                            />
                            {errors.vehicleModel && <span className="text-red-500 text-sm">Vehicle model is required</span>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm">Vehicle Brand</label>
                            <input
                                {...register("vehicleBrand", { required: true })}
                                type="text"
                                className="mt-2 p-3 border rounded-xl w-full text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter vehicle brand"
                            />
                            {errors.vehicleBrand && <span className="text-red-500 text-sm">Vehicle brand is required</span>}
                        </div>
                        {/* <div className="mb-6">
                            <label className="block text-gray-600 text-sm">Vehicle Type</label>
                            <input
                                {...register("vehicleType", { required: true })}
                                type="text"
                                className="mt-2 p-3 border rounded-xl w-full text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter vehicle type"
                            />
                            {errors.vehicleType && <span className="text-red-500 text-sm">Vehicle type is required</span>}
                        </div> */}
                        <select
                            {...register("vehicleType", { required: true })}
                            className=" mb-5 p-3 border rounded-xl w-full text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            defaultValue=""
                        >
                            {
                                vehicleType?.map((vehicle, index) => <option key={index} value={vehicle}>{vehicle}</option>)
                            }
                        </select>
                        {errors.vehicleType && <span className="text-red-500 text-sm">Vehicle type is required</span>}

                        <button type="submit" className="w-full bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-800 text-white py-3 rounded-xl text-lg font-medium hover:from-indigo-800 hover:to-indigo-800 transition-colors">
                            Proceed to Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
