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
        <div className="min-h-screen ">
            <h1 className="text-2xl font-bold text-center mt-5 uppercase">Our Services</h1>
            <div className="mt-5 grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                {
                    isLoading ? <Spinner /> :
                        services?.map((service: TService) => (<Service key={service._id} service={service} />))
                }
            </div>
        </div>
    );
};

export default Services;