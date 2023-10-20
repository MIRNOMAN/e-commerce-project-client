import { useLoaderData } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import EcommerceCard from "./EcommerceCard";


const EcommercePage = () => {
    const brandsName = useLoaderData();
    console.log(brandsName);
    return (
        
        <div className="max-w-5xl mx-auto">
           {!brandsName.length == 0 ? 
            <div>
             <div>
               
               <Swiper
         // install Swiper modules
       
         modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         
       >
         <SwiperSlide><img className="h-[500px] rounded-lg w-full bg-cover" src={brandsName[0].image1} alt="" /></SwiperSlide>
         <SwiperSlide><img className="h-[500px] rounded-lg w-full bg-cover" src={brandsName[0].image2} alt="" /></SwiperSlide>
         <SwiperSlide><img className="h-[500px] rounded-lg w-full bg-cover" src={brandsName[0].image3} alt="" /></SwiperSlide>
         
         </Swiper >
               </div>
   
               <div className="mt-11">
                  <h1 className="text-3xl font-bold text-center">Brand Card <span className="text-blue-400">Section</span></h1>
               </div>
   
               <div>
           
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-9 mx-auto">
                  
                    {
                     brandsName.slice(1,7).map(brands => <EcommerceCard key={brands._id} brands={brands}></EcommerceCard>)
                    }
   
                 </div>
           
               </div>

            </div>
            : <div className="text-3xl flex font-bold justify-center items-center h-screen">No products</div>
          }
        </div>
    );
};

export default EcommercePage;