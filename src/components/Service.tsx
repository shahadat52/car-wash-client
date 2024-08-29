import { NavLink } from "react-router-dom";
import { TService } from "../Interface/TService";
import carWash from '../assets/car-wash.jpg'

interface ServiceProps {
    service: TService;
}
const Service: React.FC<ServiceProps> = ({ service }) => {
    return (
        <NavLink to={`/services/${service?._id}`}
            className="card mx-auto col-span-1 card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    className=" "
                    src={carWash}
                    alt="Service" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title uppercase ">{service.name}</h2>
                    <h2 className="card-title">{service.price}$</h2>
                </div>

                <p className="text-justify">{service?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </NavLink>
    );
};

export default Service;