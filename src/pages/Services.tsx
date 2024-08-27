import Service from "../components/Service";
import Spinner from "../components/Spinner";
import { TService } from "../Interface/TService";
import { useGetAllServicesQuery } from "../redux/features/service/serviceApi";
// import { useAppSelector } from "../redux/hooks";

const Services = () => {
    const { data, isLoading } = useGetAllServicesQuery(undefined)
    const services = data?.data
    console.log(services);
    // const services = useAppSelector(state => state.services)
    // console.log(services);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-5 uppercase">Our Services</h1>
            <div className="mt-5 flex gap-5 justify-center">
                {
                    isLoading ? <Spinner /> :
                        services?.map((service: TService) => (<Service key={service._id} service={service} />))
                }
            </div>
        </div>
    );
};

export default Services;