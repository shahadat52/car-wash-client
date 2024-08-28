import { Dispatch, SetStateAction, useState } from 'react';
import { Service } from '../Interface/TService';
import { MdOutlineCancel } from "react-icons/md";


type AddServiceModalProps = {
    onAdd: (service: Service) => void;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
const AddServiceModal: React.FC<AddServiceModalProps> = ({ onAdd, setShowModal }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleSubmit = () => {
        const serviceData = {
            name,
            description,
            price,
            duration
        }
        onAdd(serviceData);
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
                <section className='flex justify-between items-baseline'>
                    <h2 className="text-2xl mb-4">Add Service</h2>
                    <div
                        onClick={() => setShowModal(false)}
                        className='text-2xl'>
                        <MdOutlineCancel />
                    </div>
                </section>
                <input
                    className="border mb-2 p-2 w-full"
                    type="text"
                    placeholder="Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="border mb-2 p-2 w-full"
                    type="text"
                    placeholder="Description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    className="border mb-4 p-2 w-full"
                    type="number"
                    placeholder="Price"
                    required
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <input
                    className="border mb-4 p-2 w-full"
                    type="number"
                    placeholder="Duration"
                    required
                    onChange={(e) => setDuration(Number(e.target.value))}
                />
                <div className="flex justify-end">
                    <button
                        className={`bg-primary hover:bg-[#173375] text-white font-bold py-2 px-4 rounded mr-2 ${!name || !description || price <= 0 || duration <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleSubmit}
                        disabled={!name || !description || price <= 0 || duration <= 0}
                    >
                        Add Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddServiceModal;