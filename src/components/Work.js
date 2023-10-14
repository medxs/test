import React from 'react'
import github from '../assets/github.png'
import { projects } from '../constants';






const ProjectWorkCard = ({name, description,image,source_code_link}) => (
    <div className="w-full  md:w-2/4 lg:w-1/3 py-5 px-2 lg:p-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div className="p-3 md:p-5 bg-[#110c26] rounded-xl border border-white shadow-lg relative" onClick={() => window.open(source_code_link, "_blank")}>
            <img src={github} alt="" className='absolute top-0 right-0 w-6 h-6 bg-black rounded-full mr-8 mt-8' onClick={() => window.open(source_code_link, "_blank")} />
            <img src={image} alt="" className="rounded-xl mx-auto " />

            <div className="mt-3">
                <h2 className='font-bold text-xl'>{name}</h2>
                <p>{description}</p>
                <span className='text-green-400 mr-4'>#aaa</span><span className='text-red-400'>#aaa</span>
            </div>

        </div>
    </div>
);







const Work = () => {
    return (
        <div>
            <section className='py-5 lg:py-14 md:py-10 bg-[#050816] text-white' id='project'>
                <div className="px-5 container mx-auto md:px-32">
                    <div className="py-5 lg::px-14" data-aos="zoom-in"  data-aos-duration="2000" data-aos-delay="50">
                        <p className='sm:text-[18px] text-[14px]  text-secondary uppercase tracking-wider]'>My Work</p>
                        <h2 className=' font-bold text-3xl lg:text-5xl text-[#915eff]'>Projects</h2>
                        <p className='text-justify lg:w-1/2  mt-5 text-secondary text-[17px]  leading-[30px]'>
                            Following projects showcases my skills and experience through
                            real-world examples of my work. Each project is briefly described with
                            links to code repositories and live demos in it. It reflects my
                            ability to solve complex problems, work with different technologies,
                            and manage projects effectively.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center mx-auto">

                        
                        {projects.map((pjc,index) =>{
                            return (
                                <ProjectWorkCard key={index} name={pjc.name} description={pjc.description} image={pjc.image} source_code_link={pjc.source_code_link} />
                            )
                        })}
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        {/* <div className="w-full  md:w-2/4 lg:w-1/3 py-5 px-2 lg:p-5">
                            <div className="p-3 md:p-5 bg-[#110c26] rounded-xl border border-white shadow-lg relative">
                                <img src={iGit} alt="" className='absolute top-0 right-0 w-6 h-6 bg-black rounded-full mr-8 mt-8' />
                                <img src={p1} alt="" className="rounded-xl mx-auto " />

                                <div className="mt-3">
                                    <h2 className='font-bold text-xl'>Travel Booking</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illum!</p>
                                    <span className='text-green-400 mr-4'>#aaa</span><span className='text-red-400'>#aaa</span>
                                </div>

                            </div>
                        </div>
                        <div className="w-full  md:w-2/4 lg:w-1/3 py-5 px-2 lg:p-5">
                            <div className="p-3 md:p-5 bg-[#110c26] rounded-xl border border-white shadow-lg relative">
                                <img src={iGit} alt="" className='absolute top-0 right-0 w-6 h-6 bg-black rounded-full mr-8 mt-8' />
                                <img src={p2} alt="" className="rounded-xl mx-auto" />
                                <div className="mt-3">
                                    <h2 className='font-bold text-xl'>Travel Booking</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illum!</p>
                                    <span className='text-green-400 mr-4'>#aaa</span><span className='text-red-400'>#aaa</span>
                                </div>
                            </div>

                        </div>
                        <div className="w-full  md:w-2/4 lg:w-1/3 py-5 px-2 lg:p-5">
                            <div className="p-3 md:p-5 bg-[#110c26] rounded-xl border border-white shadow-lg relative">
                                <img src={iGit} alt="" className='absolute top-0 right-0 w-6 h-6 bg-black rounded-full mr-8 mt-8' />

                                <img src={p3} alt="" className="rounded-xl mx-auto" />
                                <div className="mt-3">
                                    <h2 className='font-bold text-xl'>Travel Booking</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illum!</p>
                                    <span className='text-green-400 mr-4'>#aaa</span><span className='text-red-400'>#aaa</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>





            </section>
        </div>
    )
}

export default Work 