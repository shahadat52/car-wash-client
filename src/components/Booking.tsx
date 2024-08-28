import { useParams } from "react-router-dom";
import { useGetServiceByIdQuery } from "../redux/features/service/serviceApi";
import { useAppSelector } from "../redux/hooks";
import { TUser } from "../Interface/user";
import { TSlot } from "../Interface/booking";

const Booking = () => {
    const { id } = useParams();
    const { data } = useGetServiceByIdQuery(id);
    const user = useAppSelector(state => state.auth.user) as TUser | null;
    const slot = useAppSelector(state => state.booking.slot) as TSlot | null;
    const service = data?.data;

    const handlePayment = () => {
        // Redirect to AAMARPAY with the necessary payment data
        // window.location.href = `https://sandbox.aamarpay.com?userName=${userName}&email=${email}&serviceName=${serviceName}&selectedSlot=${selectedSlot}`;

        // Assume payment was successful and update the booking status
        // onPaymentSuccess();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-800">
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Confirm Your Booking</h1>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side */}
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 border-r border-gray-200">
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-700">Selected Service</h2>
                            <p className="mt-2 text-lg text-gray-600">{service?.name}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700">Selected Time Slot</h2>
                            <p className="mt-2 text-lg text-gray-600">{`START ${slot?.startTime} - END ${slot?.endTime}`}</p>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold text-gray-700">Your Information</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                            <div className="mb-6">
                                <label className="block text-gray-600 text-sm">Name</label>
                                <input
                                    type="text"
                                    className="mt-2 p-3 border rounded-xl w-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    defaultValue={user?.name}
                                    readOnly
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-600 text-sm">Email</label>
                                <input
                                    type="email"
                                    className="mt-2 p-3 border rounded-xl w-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    defaultValue={user?.email}
                                    readOnly
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-600 text-sm">Selected Time</label>
                                <input
                                    type="text"
                                    className="mt-2 p-3 border rounded-xl w-full text-gray-700 bg-gray-200 focus:outline-none"
                                    value={`START ${slot?.startTime} - END ${slot?.endTime}`}
                                    readOnly
                                />
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-800 text-white py-3 rounded-xl text-lg font-medium hover:from-indigo-800 hover:to-indigo-800 transition-colors">
                                Proceed to Payment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
