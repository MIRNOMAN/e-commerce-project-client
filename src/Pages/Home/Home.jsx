import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import BrandCard from "../../Components/BrandCard/BrandCard";


const Home = () => {

    const [datas, setDatas] = useState([])
    
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div>
           <Banner></Banner>
           <div className="max-w-5xl mx-auto">
           <h1 className="text-4xl text-center mt-16 font-bold">E-commerce <span className="text-blue-400">Categories</span></h1>
           <div className="mt-12 grid px-6 grid-cols-1 lg:grid-cols-3  gap-5">
            {
               datas.map(data => <BrandCard key={data.id} data={data}></BrandCard>)
            }
           </div>
           </div>
        </div>
    );
};

export default Home;