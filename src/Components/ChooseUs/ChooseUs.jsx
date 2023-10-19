import icon1 from "../../assets/icon1.jpg"
import icon2 from "../../assets/icon2.jpg"
import icon3 from "../../assets/icon3.jpg"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.jpg"
import icon7 from "../../assets/icon7.jpg"

const ChooseUs = () => {
    return (
        <div className="lg:flex text-center">
            <div data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <div className="flex text-end items-center">
                    {/* part 1 */}
                    <div>
                        <h1 className="text-xl font-semibold">Quality & commitment</h1>
                        <div className="flex justify-end">
                            <hr className="h-px my-1 w-10 justify-end bg-blue-500 border-0 p-[2px] dark:bg-blue-600" />
                        </div>
                        <p className="text-base font-normal">Our services are trusted by over 1000+ <br /> customers across Africa</p>
                    </div>
                    <div>
                        <img className="h-20 w-20" src={icon1} alt="" />
                    </div>
                </div>

                <div className="flex text-end mt-10 items-center">
                    {/* part 2 */}
                    <div>
                        <h1 className="text-xl font-semibold">Satisfied Customers</h1>
                        <div className="flex justify-end">
                            <hr className="h-px my-1 w-10 justify-end bg-blue-500 border-0 p-[2px] dark:bg-blue-600" />
                        </div>
                        <p className="text-base font-normal">We provide the best customer services <br />to our clients</p>
                    </div>
                    <div>
                        <img className="h-20 w-20" src={icon2} alt="" />
                    </div>
                </div>


                <div className="flex text-end mt-10 ml-6 items-center">
                    {/* part 3 */}
                    <div>
                        <h1 className="text-xl font-semibold">Faster & affordable</h1>
                        <div className="flex justify-end">
                            <hr className="h-px my-1 w-10 justify-end bg-blue-500 border-0 p-[2px] dark:bg-blue-600" />
                        </div>
                        <p className="text-base font-normal">We provide fast shipping times and <br /> affordable services</p>
                    </div>
                    <div>
                        <img className="h-20 w-20" src={icon3} alt="" />
                    </div>
                </div>



            </div>
            <div className="flex items-center">
                <img src={icon7} alt="" />
            </div>
            <div data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <div className="flex text-start ml-4 items-center gap-3">
                    {/* part 4 */}

                    <div>
                        <img className="h-12 w-12" src={icon5} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">24/7 customer support</h1>
                        <div className="flex justify-start">
                            <hr className="h-px my-1 w-10  bg-blue-500 border-0 p-[2px] dark:bg-blue-600" />
                        </div>
                        <p className="text-base font-normal">We are the trusted by our clients on <br /> providing the best customer <br />Expriences</p>
                    </div>

                </div>

                <div className="flex text-start mt-5 items-center gap-3">
                    {/* part 5 */}

                    <div>
                        <img className="h-16 w-16" src={icon4} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Easy and Convinient</h1>
                        <div className="flex justify-start">
                            <hr className="h-px my-1 w-10  bg-blue-500 border-0 p-[2px] dark:bg-blue-600" />
                        </div>
                        <p className="text-base font-normal">It is very easy to start shipping from <br /> China with just a quote</p>
                    </div>

                </div>

                <div className="flex text-start mt-5 items-center gap-3">
                    {/* part 6 */}

                    <div>
                        <img className="h-16 w-16" src={icon6} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Integrity</h1>
                        <div className="flex justify-start">
                            <hr className="h-px my-1 w-10  bg-blue-500 border-0 p-[2px] dark:bg-blue-600" />
                        </div>
                        <p className="text-base font-normal">We are ghana's most reputable and <br /> highly respected international Freight <br />forwarding company</p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default ChooseUs;