import React from 'react';
import { useGetAllServicesQuery } from '../redux/features/service/serviceApi';
import { TService } from '../Interface/TService';

const ServiceTable = () => {
    const { data } = useGetAllServicesQuery(undefined);
    const services = data?.data

    const handleUpdate = (id: string) => {
        // handle update logic here
        console.log(id);
    };

    const handleDelete = (id: string) => {
        // handle delete logic here
        console.log(id);

    };
    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-center">Name</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services?.map((service: TService) => (
                        <tr key={service._id}>
                            <td className="py-2 px-4 border-b  text-center font-bold">{service.name}</td>
                            <td className="py-2 px-4 border-b text-center">{service.description.substring(0, 30)}</td>
                            <td className="py-2 px-4 border-b text-center">{service.price}</td>
                            <td className="py-2 px-4 border-b text-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                                    onClick={() => handleUpdate(service._id)}
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                    onClick={() => handleDelete(service._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default ServiceTable;