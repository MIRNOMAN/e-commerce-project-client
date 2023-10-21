import Swal from 'sweetalert2'

const AddProduct = () => {

   const handleAddButton = (e) => {
      e.preventDefault();
      const form = e.target;
      const brand_name = form.brand_name.value;
      const name = form.name.value;
      const type = form.type.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const description = form.description.value;
      const photo = form.photo.value;

      const newUser = { brand_name, name, type, price, rating, description, photo }

      console.log(newUser)
      fetch('https://e-commerce-project-server-smoky.vercel.app/cards', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newUser)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.insertedId) {
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
      <div>
         <div className=" bg-[#F4F3F0] mt-4 px-16 py-10">
            <h1 className="text-4xl font-semibold text-center rancho">Add Products</h1>



            <div className="mt-9">
               <form onSubmit={handleAddButton} >
                  <div className="md:flex">
                     <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                        <input type="text" name="brand_name" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="brand name" required />
                     </div>
                  </div>
                  <div className="md:flex mt-4">
                     <div className="lg:w-1/2 ">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Name " required />
                     </div>

                     <div className="lg:w-1/2 lg:ml-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                        <input type="text" name="type" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type of  " required />
                     </div>
                  </div>
                  <div className="md:flex mt-4">
                     <div className="lg:w-1/2 ">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" name="price" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter price " required />
                     </div>

                     <div className="lg:w-1/2 lg:ml-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input type="number" name="rating" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" required />
                     </div>
                  </div>
                  <div className="md:flex mt-4">
                     <div className="lg:w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                        <input type="text" name="description" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description " required />
                     </div>
                  </div>

                  <div className="w-full mt-4">
                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                     <input type="text" name="photo" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
                  </div>

                  <input type="submit" value='Add product' className="text-white w-full mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" />

               </form>

            </div>

         </div>
      </div>
   );
};

export default AddProduct;