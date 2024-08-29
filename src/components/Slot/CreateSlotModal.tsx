import React, { Dispatch, SetStateAction, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useGetAllServicesQuery } from '../../redux/features/service/serviceApi';
import { TService } from '../../Interface/TService';
import { makeDateFormat } from '../../utils/makeDateFormate';
import { useCreateSlotMutation } from '../../redux/features/slot/slotApi';

type createSlotModalProps = {
    setSlotController: Dispatch<SetStateAction<boolean>>;
}

const CreateSlotModal: React.FC<createSlotModalProps> = ({ setSlotController }) => {
    const { data } = useGetAllServicesQuery(undefined)
    const [createSlot, result] = useCreateSlotMutation()
    const [service, setService] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const services = data?.data
    console.log(services);

    const handleSubmit = () => {
        const slotData = {
            service,
            date: makeDateFormat(selectedDate),
            startTime,
            endTime,
        }
        console.log(slotData);
        createSlot(slotData)
        setSlotController(false)
    };
    console.log(result);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
                <section className='flex justify-between items-baseline'>
                    <h2 className="uppercase text-center font-bold text-2xl mb-4">Create A New Slot</h2>
                    <div
                        onClick={() => setSlotController(false)}
                        className='text-2xl'>
                        <MdOutlineCancel />
                    </div>
                </section>
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
                <select
                    className="select select-bordered w-full my-2 "
                    onChange={(e) => setService(e.target.value)}
                >
                    {
                        services?.map((service: TService) => <option key={service._id} value={service?._id}>{service?.name}</option>)
                    }
                </select>

                <input
                    className="border mb-4 p-2 w-full"
                    type="time"
                    placeholder="startTime"
                    required
                    onChange={(e) => setStartTime(e.target.value)}
                />
                <input
                    className="border mb-4 p-2 w-full"
                    type="time"
                    placeholder="Duration"
                    required
                    onChange={(e) => setEndTime(e.target.value)}
                />
                <div className="flex justify-end">
                    <button
                        className={`bg-primary hover:bg-[#173375] text-white font-bold py-2 px-4 rounded mr-2 ${!service || !selectedDate || !startTime || !endTime ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleSubmit}
                        disabled={!service || !selectedDate || !startTime || !endTime}
                    >
                        Create Slot
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateSlotModal;