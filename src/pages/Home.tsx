import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/qDwy6SH/car-wash.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="uppercase mb-5 text-5xl font-bold">Flash-Wash</h1>
                        <p className="text-sm -mt-6 mb-5 ">Experience the Ultimate Car Care with <span className="uppercase">Flash-wash</span></p>
                        <p className="mb-5 text-justify ">
                            At FLASH-WASH, we believe your car deserves the best. Our premium services ensure a spotless clean, inside and out, leaving your vehicle looking like new. Whether you need a quick wash or a deep detail, our expert team is here to deliver unparalleled results. Drive in today and let your car shine like it should!
                        </p>
                        <NavLink to={'/services'} className="btn">Get Started</NavLink>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;