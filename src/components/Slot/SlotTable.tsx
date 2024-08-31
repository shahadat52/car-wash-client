
import { TSlot } from '../../Interface/TSlots';
import { useGetAllSlotsQuery, useSlotStatusUpdateMutation } from '../../redux/features/slot/slotApi';

const SlotTable = () => {
    const { data } = useGetAllSlotsQuery({})
    const [statusUpdate] = useSlotStatusUpdateMutation()
    const slots = data?.data
    // const services = data?.data?.map((item: TSlot) => item?.service?.name)

    const handleStatusToggle = (slot: TSlot) => {
        const confirmDelete = window.confirm('Are you sure you want to update status for this service?');
        if (confirmDelete) {
            statusUpdate(slot?._id)
        }
    }
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Manage Slots</h2>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="font-bold py-2 px-4 border">Service</th>
                        <th className="py-2 px-4 border">Time</th>
                        <th className="py-2 px-4 border">Date</th>
                        <th className="py-2 px-4 border">Status</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {slots?.map((slot: TSlot) => (
                        <tr key={slot._id} className='text-center'>
                            <td className="py-2 px-4 border">{slot?.service?.name}</td>
                            <td className="py-2 px-4 border">{slot?.date}</td>
                            <td className="py-2 px-4 border">{slot?.startTime} -  {slot?.endTime}</td>
                            <td className={`font-bold uppercase py-2 px-4 border ${slot?.isBooked === 'booked' ? 'text-gray-400' : slot?.isBooked === 'canceled' ? 'text-red-500' : 'text-blue-500 hover:text-blue-700'
                                }`}>{slot?.isBooked}</td>
                            <td className="py-2 px-4 border">
                                <button
                                    onClick={() => handleStatusToggle(slot)}
                                    className={` px-4 py-2 rounded ${slot?.isBooked === 'booked' ? 'bg-gray-400  cursor-not-allowed' : slot?.isBooked === 'canceled' ? 'bg-red-500 ' : 'bg-blue-500 hover:bg-blue-700'
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