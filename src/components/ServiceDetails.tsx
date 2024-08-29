/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useGetServiceByIdQuery } from '../redux/features/service/serviceApi';
import { useAppDispatch } from '../redux/hooks';
import { setSlot } from '../redux/features/booking/bookingSlice';
import { useGetAllSlotsQuery } from '../redux/features/slot/slotApi';

type TimeSlot = {
    startTime: string;
    endTime: string;
    isBooked: string;
};

const ServiceDetails = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
    const dispatch = useAppDispatch()

    const { id } = useParams();
    //fetch service by Id
    const { data } = useGetServiceByIdQuery(id)
    const service = data?.data

    const params = {
        date: selectedDate?.toISOString().split('T')[0],
        service: id
    }
    //fetch slots
    const { data: slotData } = useGetAllSlotsQuery(params)
    const timeSlots: TimeSlot[] = slotData?.data?.map((item: any) => ({
        startTime: item?.startTime,
        endTime: item?.endTime,
        isBooked: item?.isBooked
    }))
    // console.log(timeSlots);

    const handleSlotClick = (slot: TimeSlot) => {

        dispatch(setSlot(slot))
        setSelectedSlot(slot)
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{service?.name}</h2>
            <p className="mb-6">{service?.description}</p>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select a Date
                </label>
                <input
                    type="date"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Available Time Slots</h3>
                <div className="grid grid-cols-2 gap-4">
                    {timeSlots?.map((slot, index) => (
                        <button
                            key={index}
                            // disabled={slot.isBooked}
                            className={`py-2 px-4 rounded ${slot?.isBooked === 'booked'
                                ? 'bg-gray-400 text-gray-500 cursor-not-allowed'
                                : selectedSlot?.startTime === slot.startTime
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-green-500 text-white'
                                }`}
                            onClick={() => handleSlotClick(slot)}
                        >
                            <div className='flex justify-around'>
                                <p>START TIME  {slot.startTime}</p>
                                <p>END TIME{slot.endTime}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {selectedSlot && (
                <NavLink to={`/booking/${id}`} className="btn btn-primary mt-6">
                    Book This Service
                </NavLink>
            )}
        </div>
    );
};

export default ServiceDetails;



