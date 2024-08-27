import { NavLink } from "react-router-dom";
import { TService } from "../Interface/TService";
import carWash from '../assets/car-wash.jpg'

interface ServiceProps {
    service: TService;
}
const Service: React.FC<ServiceProps> = ({ service }) => {
    return (
        <NavLink to={`/services/${service?._id}`}
            className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={carWash}
                    alt="Service" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{service.name}</h2>
                    <h2 className="card-title">{service.price}$</h2>
                </div>

                <p>{service?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </NavLink>
    );
};

export default Service;