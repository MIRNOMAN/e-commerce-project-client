import picture  from "../../assets/picture.jpg"
import { FaArrowAltCircleRight } from "react-icons/fa";

const ProductInfo = () => {
    return (
        <div className="h-[500px] flex shadow-lg ">
            <div className="w-1/2 p-5 pt-7">
             <h1 className="text-4xl font-extrabold">The ultimate product with pleasure</h1>
             <p className="mt-4 text-sm">Let your product do the magic care for you. Change the quality of your personality by changing your appearance. Everything reflects your character and we're taking care of it.</p>
             <button className="btn bg-[#FC775A] text-white font-bold mt-4">Learn More <FaArrowAltCircleRight className="ml-3"></FaArrowAltCircleRight></button>

             <h4 className="mt-14 font-bold text-xl">Our services</h4>
             <div className="flex gap-4">
                <div className=" h-28 w-28 bg-blue-400">
                   <h5>Electronic <br /> products</h5>
                </div>
                <div className=" h-28 w-28 bg-blue-400">

              </div>
              <div className=" h-28 w-28 bg-blue-400">

              </div>
              <div className=" h-28 w-28 bg-blue-400">

              </div>
             </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img className=" h-[350px]" src={picture} alt="" />
            </div>
        </div>
    );
};

export default ProductInfo;