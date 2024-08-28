
import { useState } from "react";
import { useAddServiceMutation } from "../redux/features/service/serviceApi";
import ServiceTable from "./ServiceTable";
import AddServiceModal from "./AddServiceModal";
import { Service } from "../Interface/TService";

const ServiceManagement = () => {
    // const [services, setServices] = useState<Service[]>([]);
    const [showModal, setShowModal] = useState(false);
    // const { data } = useGetAllServicesQuery(undefined);
    const [addService, result] = useAddServiceMutation()
    // const services = data?.data
    console.log(result);


    const handleAddService = (service: Service) => {
        addService(service)
        setShowModal(false);
    };
    return (
        <div>
            <div className="container mx-auto p-4">
                <button
                    className="bg-primary hover:bg-[#36518f] text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => setShowModal(true)}
                >
                    Add Service
                </button>
                {showModal && <AddServiceModal onAdd={handleAddService} setShowModal={setShowModal} />}
                <ServiceTable />
            </div>
        </div>
    );
};

export default ServiceManagement;