import { FaArrowAltCircleRight } from "react-icons/fa";
import Swal from "sweetalert2";


const CardCatagoris = ({value,values, setValues}) => {

    const {_id, brand_name, name, type, price, rating, description,photo } = value;

    const handleDelete = (_id) =>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             

            fetch(`http://localhost:5000/cart/${_id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your card has been deleted.',
                        'success'
                      )
                      const remaining = values?.filter(cof =>cof._id !== _id)
                      setValues(remaining)
                }
            })
            }
          })
    }

    return (
        <div>
            
<div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 h-[200px] w-full rounded-t-lg" src={photo} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <div className="flex justify-between">
            <h4 className="font-semibold text-xl">{brand_name}</h4>
            <h4 className="font-semibold text-xl">{name}</h4>
            </div>
            <h5 className="text-sm mt-3 font-normal tracking-tight text-gray-900 dark:text-white">{description}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            
        <div className="flex justify-between flex-grow ">
           <div className="flex items-center">
           <h1 className="text-sm pl-2 font-bold text-gray-900 dark:text-white">Rating : </h1>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
           </div>
           <div>
            <h1 className="text-sm pl-2 font-bold text-gray-900 dark:text-white"> {type} </h1>
           </div>
        </div>

        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            <button onClick={() => handleDelete(_id)}  type="button" className="text-white mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 flex items-center mb-2">Delete <FaArrowAltCircleRight className="ml-2"></FaArrowAltCircleRight></button>
        </div>
    </div>
</div>

        </div>
    );
};

export default CardCatagoris;