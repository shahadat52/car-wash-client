import { useGetAllSlotsQuery } from '../../redux/features/booking/bookingApi';
import { TSlot } from '../../Interface/TSlots';

const SlotTable = () => {
    const { data } = useGetAllSlotsQuery({})
    const slots = data?.data
    const services = data?.data?.map((item: TSlot) => item?.service?.name)
    console.log(services);

    const handleStatusToggle = (slot: TSlot) => {
        console.log(slot);
    };
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Manage Slots</h2>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="font-bold py-2 px-4 border">Service</th>
                        <th className="py-2 px-4 border">Time</th>
                        <th className="py-2 px-4 border">Status</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {slots?.map((slot: TSlot) => (
                        <tr key={slot._id} className='text-center'>
                            <td className="py-2 px-4 border">{slot?.service?.name}</td>
                            <td className="py-2 px-4 border">{slot?.startTime} -  {slot?.endTime}</td>
                            <td className="py-2 px-4 border">{slot?.isBooked}</td>
                            <td className="py-2 px-4 border">
                                <button
                                    onClick={() => handleStatusToggle(slot)}
                                    className={`px-4 py-2 rounded ${slot?.isBooked === 'booked' ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
                                        } text-white`}
                                    disabled={slot.isBooked === 'booked'}
                                >
                                    {slot.isBooked === 'booked' ? 'booked' : 'Toggle Status'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SlotTable;