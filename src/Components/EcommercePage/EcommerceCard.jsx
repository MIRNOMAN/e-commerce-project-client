import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const EcommerceCard = ({ brands }) => {
    const { name, type, price, photo, description, rating, _id } = brands;
    console.log(brands)

    return (
        <div>

            <div className=" bg-white border h-full w-full  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[200px] w-full" src={photo} alt="" />
                </a>
                <div className="px-4  mt-3">
                    <a href="#" className="">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <a href="#" className="">
                        <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white"> Type : {type}</h5>
                        <h5 className="text-base font-semibold  tracking-tight text-gray-900 dark:text-white"> Price : {price} $</h5>
                    </a>
                    <p className="mb-3 mt-2 font-normal text-sm text-gray-700 dark:text-gray-400">{description}</p>

                    <div className="flex items-center">
                        <h1 className="font-semibold ">Rating : </h1>
                        <svg className="w-4 h-4 text-yellow-300 ml-2 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>

                    </div>

                    <div className="flex items-center justify-center flex-grow mx-auto text-center mt-3">


                        <Link to={`/details/${_id}`}>
                            <button type="button" className="text-white  justify-center mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 flex items-center mb-2">Details <FaArrowAltCircleRight className="ml-2"></FaArrowAltCircleRight></button>
                        </Link>

                        <Link to={`/updates/${_id}`}>
                        <button type="button" className="text-white  justify-center mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 flex items-center mb-2">Update <FaArrowAltCircleRight className="ml-2"></FaArrowAltCircleRight></button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default EcommerceCard;