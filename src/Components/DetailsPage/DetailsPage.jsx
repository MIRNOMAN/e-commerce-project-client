
import { FaArrowAltCircleRight } from "react-icons/fa";
import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const DetailsPage = () => {

    const data = useLoaderData();
  
    console.log(data);

    const {brand_name, name, type, price, rating, description,photo} = data;
    const cardProduct = {brand_name, name, type, price, rating, description,photo}
    const handleAddToCard = () =>{
        fetch('http://localhost:5000/cart/',{
            method: 'POST',
            headers :{
               'content-type': 'application/json'
            },
            body: JSON.stringify(cardProduct)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data.insertedId){
               Swal.fire({
                  title: 'success',
                  text: 'Add product successfully',
                  icon: 'success',
                  confirmButtonText: 'Done'
                })
            } 
         })
    }

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
                      
                           <button onClick={handleAddToCard}  type="button" className="text-white mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 flex items-center mb-2">Add to Card <FaArrowAltCircleRight className="ml-2"></FaArrowAltCircleRight></button>
                       
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DetailsPage;