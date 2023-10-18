

const AddProduct = () => {

    const handleAddButton = (e) => {
          e.preventDefault();
          console.log('Add Product')
    }
    return (
        <div>
             <div className=" bg-[#F4F3F0] mt-4 px-16 py-10">
                <h1 className="text-4xl font-semibold text-center rancho">Add Products</h1>
                


                <div className="mt-9"> 
             <form onSubmit={handleAddButton} >

             <div className="md:flex ">
             <div className="w-1/2 mr-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Name " required />
             </div>

             <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <input type="text" name="type" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type of  " required />
             </div>
             </div>
             <div className="md:flex mt-4">
             <div className="w-1/2 mr-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" name="price" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter price " required />
             </div>

             <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                <input type="number" name="rating" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" required />
             </div>
             </div>
             <div className="md:flex mt-4">
             <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                <input type="text" name="description" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description " required />
             </div>
             </div>

             <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                <input type="text" name="photo" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
             </div>

             <button type="submit" className="text-white w-full mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add product</button>

             </form>

             </div>

            </div>
        </div>
    );
};

export default AddProduct;