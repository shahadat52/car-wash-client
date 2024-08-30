import { useGetAllBookingsQuery } from '../../redux/features/booking/bookingApi';
import { TBooking } from '../../Interface/TBooking';

const UserBookings = () => {
    const { data } = useGetAllBookingsQuery(undefined)
    const bookings = data?.data
    console.log(bookings);
    return (
        <div className="overflow-x-auto m-2">
            <h1 className="text-xl uppercase font-bold text-center my-2 ">So far <span className='text-orange-600 text-2xl'>{bookings?.length}</span> booked</h1>
            <hr />
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left">Customer</th>
                        <th className="px-6 py-3 text-left">Service</th>
                        <th className="px-6 py-3 text-left">Date</th>
                        <th className="px-6 py-3 text-left">Start Time</th>
                        <th className="px-6 py-3 text-left">End Time</th>
                        <th className="px-6 py-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.map((booking: TBooking) => (
                        <tr key={booking._id}>
                            <td className="border px-6 py-4 uppercase">{booking?.customer?.name}</td>
                            <td className="border px-6 py-4 uppercase">{booking?.service?.name}</td>
                            <td className="border px-6 py-4">{booking?.slot?.date}</td>
                            <td className="border px-6 py-4">{booking?.slot?.startTime}</td>
                            <td className="border px-6 py-4">{booking?.slot?.endTime}</td>
                            <td className="border px-6 py-4">{booking?.slot?.isBooked}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserBookings;