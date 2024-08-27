import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetServicesByIdQuery } from '../redux/features/service/serviceApi';

type TimeSlot = {
    time: string;
    booked: boolean;
};

const ServiceDetails = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
    const { id } = useParams();
    console.log(id);
    const { data } = useGetServicesByIdQuery(id)
    const service = data?.data
    console.log(service);

    // Sample time slots data
    const timeSlots: TimeSlot[] = [
        { time: '09:00 AM', booked: false },
        { time: '10:00 AM', booked: true },
        { time: '11:00 AM', booked: false },
        { time: '01:00 PM', booked: false },
        { time: '02:00 PM', booked: true },
    ];

    const handleSlotClick = (slot: TimeSlot) => {
        if (!slot.booked) {
            setSelectedSlot(slot);
        }
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
                    {timeSlots.map((slot, index) => (
                        <button
                            key={index}
                            disabled={slot.booked}
                            className={`py-2 px-4 rounded ${slot.booked
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : selectedSlot?.time === slot.time
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-green-500 text-white'
                                }`}
                            onClick={() => handleSlotClick(slot)}
                        >
                            {slot.time}
                        </button>
                    ))}
                </div>
            </div>

            {selectedSlot && (
                <button className="btn btn-primary mt-6">
                    Book This Service
                </button>
            )}
        </div>
    );
};

export default ServiceDetails;



