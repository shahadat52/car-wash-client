import { formatDistanceToNow, parseISO } from 'date-fns';
import { useGetBookingsByCustomerQuery } from '../../redux/features/booking/bookingApi';
import { useParams } from 'react-router-dom';
import { TBooking } from '../../Interface/TBooking';

const MyBookings = () => {
    const { id } = useParams()
    console.log(id);
    const { data } = useGetBookingsByCustomerQuery(undefined);
    console.log(data);
    const pastBookings = data?.data
    const upcomingBookings = data?.data

    return (
        <div className="p-4 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Past Bookings</h2>
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Service</th>
                            <th className="border border-gray-300 p-2">Date</th>
                            <th className="border border-gray-300 p-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pastBookings?.map((booking: TBooking) => (
                            <tr key={booking._id}>
                                <td className="border border-gray-300 p-2">{booking?.service?.name}</td>
                                <td className="border border-gray-300 p-2">{booking?.slot?.date}</td>
                                <td className="border border-gray-300 p-2">
                                    {booking?.slot?.startTime} - {booking?.slot?.endTime}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Upcoming Bookings</h2>
                <div className="space-y-4">
                    {upcomingBookings?.map((booking: TBooking) => (
                        <div key={booking._id} className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">{booking?.service?.name}</h3>
                            <p>Date: {booking?.slot?.date}</p>
                            <p>
                                Time: {booking?.slot?.startTime} - {booking?.slot?.endTime}
                            </p>
                            <div className="mt-2 text-sm text-gray-600">
                                <p>
                                    Countdown: {formatDistanceToNow(parseISO(`${booking?.slot?.date}T${booking?.slot?.startTime}`), { addSuffix: true })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MyBookings;