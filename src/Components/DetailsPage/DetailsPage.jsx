import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";


const DetailsPage = () => {



    const data = useLoaderData();
    console.log(data);
    //    
    return (
        <div className="max-w-5xl mx-auto">
            <div className="lg:flex gap-10">
                <div className="lg:w-1/2">
                    <div>
                        <img src={data.photo} alt="" />
                    </div>
                    <div>
                        <h1 className="text-4xl mt-5 font-bold">Descri<span className="text-blue-400">ption</span></h1>
                        <p className="text-xl font-normal mt-7">{data.description}</p>
                    </div>
                </div>
                <div className="lg:w-1/2 border">
                    <div className="p-10">
                        <h1 className="text-2xl mt-5 font-bold">Brand Name : <span className="text-blue-400"> {data.brand_name}</span></h1>
                        <h1 className="text-2xl mt-5 font-bold">Product Name : <span className="text-blue-400"> {data.name}</span></h1>
                        <h1 className="text-2xl mt-5 font-bold">Product Type : <span className="text-blue-400"> {data.type}</span></h1>
                        <h1 className="text-2xl mt-5 font-bold">Price : <span className="text-blue-400"> {data.price}$</span></h1>
                        <h1 className="text-2xl mt-5 font-bold">Rating : <span className="text-blue-400"> {data.rating}</span></h1>

                        <div className="mt-10">
                            <button type="button" className="text-white mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 flex items-center mb-2">Add to Card <FaArrowAltCircleRight className="ml-2"></FaArrowAltCircleRight></button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DetailsPage;