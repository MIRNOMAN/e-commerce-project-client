import cover from "../../assets/cover.png"
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative bg-blue-200 h-[400px]">
           <div className="max-w-5xl mx-auto">
           <img className="h-[400px] w-[500px] absolute inset-y-0 right-0" src={cover} alt="" />
           <div className=" pl-4 pt-8" data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500">
            <h1 className="lg:text-7xl text-3xl  font-extrabold text-blue-500">DIGITAL <br /> PRODUCT <br /> E-COMMERCE <br /> WEBSITE</h1>
            <button type="button" className="text-white mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 flex items-center mb-2">Explore More <FaArrowAltCircleRight className="ml-2"></FaArrowAltCircleRight></button>
           </div>
           </div>
        </div>
    );
};

export default Banner;