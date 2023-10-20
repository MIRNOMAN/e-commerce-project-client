import picture  from "../../assets/picture.jpg"
import { FaArrowAltCircleRight,FaDesktop,FaChartLine,FaCoins,FaEnvelopeOpenText } from "react-icons/fa";

const ProductInfo = () => {
    return (
        <div className="lg:h-[500px] lg:flex shadow-lg ">
            <div className="lg:w-1/2 p-5 pt-7">
             <div data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500">
             <h1 className="text-4xl font-extrabold">The ultimate product with pleasure</h1>
             <p className="mt-4 text-sm">Let your product do the magic care for you. Change the quality of your personality by changing your appearance. Everything reflects your character and we're taking care of it.</p>
             <button className="btn bg-[#FC775A] text-white font-bold mt-4">Learn More <FaArrowAltCircleRight className="ml-3"></FaArrowAltCircleRight></button>
             </div>

             <h4 className="mt-10 font-bold text-[#FC775A] text-2xl">Our services</h4>
             <hr className="h-px my-1 w-2/6 justify-end bg-[#FC775A] border-0  dark:bg-blue-600" />
             
             <div className="flex gap-4 mt-8 ">
                <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"className=" h-28 w-28 p-2 text-white transition duration-300 ease-in-out hover:scale-110 rounded-xl text-center bg-[#FC775A]">
                    <FaDesktop className="mx-auto text-xl mt-4"></FaDesktop>
                   <h5 className="font-semibold">Electronic <br /> products</h5>
                </div>
                
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className=" h-28 w-28 p-2 transition duration-300 ease-in-out hover:scale-110 text-white rounded-xl text-center bg-[#FC775A]">
                    <FaChartLine className="mx-auto text-xl mt-4"></FaChartLine>
                <h5 className="font-semibold text-sm mt-2">In-Demand <br /> products</h5>
                 </div>

              <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className=" h-28 w-28 p-2 text-white transition duration-300 ease-in-out hover:scale-110 rounded-xl text-center bg-[#FC775A]">
              <FaCoins className="mx-auto text-xl mt-4"></FaCoins>
              <h5 className="font-semibold mt-2">Best <br /> Prices</h5>
              </div>

              <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className=" h-28 w-28 p-2 text-white transition duration-300 ease-in-out hover:scale-110 rounded-xl text-center bg-[#FC775A]">
              <FaEnvelopeOpenText className="mx-auto text-xl mt-4"></FaEnvelopeOpenText>
              <h5 className="font-semibold mt-2">1 years <br /> warranty</h5>
              </div>
             </div>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
               
              <img className=" rounded-full h-[350px]" src={picture} alt="" />
            </div>
        </div>
    );
};

export default ProductInfo;