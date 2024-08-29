
import { Dispatch, SetStateAction, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { TService } from '../Interface/TService';
import { useUpdateServiceMutation } from '../redux/features/service/serviceApi';


type UpdateServiceModalProps = {
    setUpdateModal: Dispatch<SetStateAction<boolean>>;
    service: TService
}

const UpdateServiceModal: React.FC<UpdateServiceModalProps> = ({ setUpdateModal, service }) => {
    const [name, setName] = useState(service?.name);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [duration, setDuration] = useState(0);
    const [serviceUpdate, result] = useUpdateServiceMutation()


    const handleSubmit = () => {
        const serviceData = {
            name,
            description,
            price,
            duration
        }
        const data = {
            id: service._id,
            data: serviceData
        }
        serviceUpdate(data)
        setUpdateModal(false)
    };

    console.log(result);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
                <section className='flex justify-between items-baseline'>
                    <h2 className="text-2xl mb-4">Update Service</h2>
                    <div
                        onClick={() => setUpdateModal(false)}
                        className='text-2xl'>
                        <MdOutlineCancel />
                    </div>
                </section>
                <input
                    className="border mb-2 p-2 w-full"
                    type="text"
                    placeholder="Name"
                    defaultValue={service?.name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="border mb-2 p-2 w-full"
                    type="text"
                    placeholder="Description"
                    defaultValue={service?.description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    className="border mb-4 p-2 w-full"
                    type="number"
                    placeholder="Price"
                    defaultValue={service?.price}
                    required
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <input
                    className="border mb-4 p-2 w-full"
                    type="number"
                    placeholder="Duration"
                    defaultValue={service?.duration}
                    required
                    onChange={(e) => setDuration(Number(e.target.value))}
                />
                <div className="flex justify-end">
                    <button
                        className={`bg-primary hover:bg-[#173375] text-white font-bold py-2 px-4 rounded mr-2 ${!name || !description || price <= 0 || duration <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleSubmit}
                        disabled={!name || !description || price <= 0 || duration <= 0}
                    >
                        Update Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateServiceModal;