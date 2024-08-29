
import { useState } from "react";
import { useAddServiceMutation, useGetServiceByIdQuery } from "../redux/features/service/serviceApi";
import ServiceTable from "./ServiceTable";
import AddServiceModal from "./AddServiceModal";
import { Service } from "../Interface/TService";
import UpdateServiceModal from "./UpdateServiceModal";

const ServiceManagement = () => {
    const [addServiceModal, setAddServiceModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false)
    const [updateId, setUpdateId] = useState('')
    const [addService] = useAddServiceMutation()
    const { data } = useGetServiceByIdQuery(updateId);
    const service = data?.data
    console.log(service);

    const handleAddService = (service: Service) => {
        addService(service)
        setAddServiceModal(false);
    };

    return (
        <div>
            <div className="container mx-auto p-4">
                <button
                    className="bg-primary hover:bg-[#36518f] text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => setAddServiceModal(true)}
                >
                    Add Service
                </button>
                {addServiceModal && <AddServiceModal onAdd={handleAddService} setAddServiceModal={setAddServiceModal} />}
                {updateModal && <UpdateServiceModal setUpdateModal={setUpdateModal} service={service} />}

                <ServiceTable setUpdateModal={setUpdateModal} setUpdateId={setUpdateId} />
            </div>
        </div>
    );
};

export default ServiceManagement;