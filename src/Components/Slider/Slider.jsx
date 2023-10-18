import Marquee from "react-fast-marquee";
import card1 from "../../assets/chokolate.jpg"
import card2 from "../../assets/fashion.jpg"
import card3 from "../../assets/fashion2.jpg"
import card4 from "../../assets/lifestyle.jpg"
import card5 from "../../assets/liptik.jpg"
import card6 from "../../assets/mobile.png"
import card7 from "../../assets/watch.jpg"


const Slider = () => {
    return (
        <div className="flex  gap-4">
            <Marquee pauseOnHover={true}>
            <div className="h-[150px] w-[180px] flex justify-center items-center  shadow-xl p-4">
              <img className="h-[120px] bg-cover w-[120px]" src={card1} alt="" />
            </div>
            <div className="h-[150px] w-[180px] flex justify-center items-center  shadow-xl p-4">
              <img className="h-[120px] bg-cover w-[120px]" src={card2} alt="" />
            </div>
            <div className="h-[150px] w-[180px]  flex justify-center items-center  shadow-xl p-4">
              <img className="h-[120px] bg-cover w-[120px]" src={card3} alt="" />
            </div>
            <div className="h-[150px] w-[180px] flex justify-center items-center  shadow-xl p-4">
              <img className="h-[120px] bg-cover w-[120px]" src={card4} alt="" />
            </div>
            <div className="h-[150px] w-[180px] flex justify-center items-center  shadow-xl p-4">
              <img className="h-[120px] bg-cover w-[120px]" src={card5} alt="" />
            </div>
            <div className="h-[150px] w-[180px] flex justify-center items-center  shadow-xl p-4">
              <img className="h-[120px] bg-cover w-[120px]" src={card6} alt="" />
            </div>
            <div className="h-[150px] w-[180px] flex justify-center items-center  shadow-xl p-4">
              <img className="h-[120px] w-[120px]" src={card7} alt="" />
            </div>
            
            </Marquee>
        </div>
    );
};

export default Slider;