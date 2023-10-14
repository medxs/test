import React from 'react';
import { services } from '../constants';
// import about1 from "../assets/web.png"
// import about2 from "../assets/mobile.png"
// import about3 from "../assets/backend.png"
// import about4 from "../assets/creator.png"

const ServiceCard = ({ icon, title }) => (
    <div className=" w-full md:w-2/4 lg:w-1/3 xl:w-1/4 py-5 px-2 lg:p-5" data-aos="fade-up-left" data-aos-duration="2000">
        <div className="bg-[#110c26] p-10 rounded-2xl border border-white shadow-lg">
            <img src={icon} className='mx-auto w-20 h-20 animate-pulse hover:animate-spin' alt="" />
            <p className='text-center pt-10 text-white font-bold text-lg '>{title}</p>
        </div>
    </div>
);

const About = () => {
    return (
        <div>
            <section className='bg-[#050816] py-0  text-white md:py-10' id='about' >
                <div className="container mx-auto md:px-16">
                    <div className="py-5 px-5 lg:py-20 border-solid border-t-4 border-sky-500" data-aos="fade-right"  data-aos-duration="2000" data-aos-delay="50">
                        <p className='sm:text-[18px] text-[14px] text-center text-secondary uppercase tracking-wider'>Introduction</p>
                        <h2 className='text-center font-bold text-3xl lg:text-5xl text-[#915eff]'>Overview</h2>
                        <p className='lg:w-1/2 text-center mx-auto mt-5 text-secondary text-[17px]  leading-[30px]'>
                            I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                        </p>
                    </div>


                    <div className="flex flex-wrap justify-center p-3 lg:p-10">

                        {services.map((service, index) => {
                            return (
                                <ServiceCard key={index} icon={service.icon} title={service.title} />
                            )})
                        }




                        {/* <div className="w-full md:w-2/4 lg:w-1/3 xl:w-1/4 py-5 px-2 lg:p-5">
                            <div className="bg-[#110c26] p-10 rounded-2xl border border-white  shadow-lg">
                                <img src={about1} className='mx-auto w-20 h-20  animate-pulse' alt="" />
                                <p className='text-center pt-10 text-white font-bold text-lg  '>Web <br /> Developer</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/4  lg:w-1/3 xl:w-1/4 py-5 px-2 lg:p-5">
                            <div className="bg-[#110c26] p-10 rounded-2xl border border-white  shadow-lg">
                                <img src={about2} className='mx-auto w-20 h-20 animate-pulse' alt="" />
                                <p className='text-center pt-10 text-white font-bold text-lg  '>ReactJS <br /> Developer</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/4  lg:w-1/3 xl:w-1/4 py-5 px-2 lg:p-5">
                            <div className="bg-[#110c26] p-10 rounded-2xl border border-white  shadow-lg">
                                <img src={about3} className='mx-auto w-20 h-20 animate-pulse' alt="" />
                                <p className='text-center pt-10 text-white font-bold text-lg  '>Backend <br />Developer</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/4  lg:w-1/3 xl:w-1/4 py-5 px-2 lg:p-5">
                            <div className="bg-[#110c26] p-10 rounded-2xl border border-white  shadow-lg">
                                <img src={about4} className='mx-auto w-20 h-20 animate-pulse' alt="" />
                                <p className='text-center pt-10 text-white font-bold text-lg  '>Content <br /> Creater</p>
                            </div>
                        </div> */}
                    </div>





                </div>
            </section>
        </div>
    )
}

export default About