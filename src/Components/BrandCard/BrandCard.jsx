import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BrandCard = ({ data }) => {

    const { brand_name, image } = data;
    return (
        <div>

            <Link to={`/cards/${brand_name}`}>
                <div className=" w-full h-full relative transition duration-300 ease-in-out hover:scale-110  image-full">
                    <figure><img className="lg:w-[300px] w-full h-full lg:h-[200px]" src={image} /></figure>
                    <div className="card-body">
                        <div className="card-actions absolute bottom-3 text-2xl ">
                            <button className="flex items-center justify-center text-blue-400 font-extrabold " >{brand_name} <FaArrowAltCircleRight className="ml-3"></FaArrowAltCircleRight></button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;