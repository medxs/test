import React from 'react'
import c1 from '../assets/company/starbucks.png'
import c2 from '../assets/company/tesla.png'
import c3 from '../assets/company/shopify.png'
import c4 from '../assets/company/meta.png'



const Experience = () => {
    return (
        <>
            <section>
                <div className="py-5 md:py-10 bg-[#050816] text-white" id="experience">
                    <div className="px-3 sm:px-5 md:px-10 container mx-auto md:px-16">
                        <div className="py-10" data-aos="zoom-in"  data-aos-duration="2000" data-aos-delay="50" >
                            <p className=' sm:text-[18px] text-[14px] text-center text-secondary uppercase tracking-wider'>What i have done so far</p>
                            <h2 className=' text-center font-bold text-3xl lg:text-5xl text-[#915eff]'>Work Experience</h2>
                            {/* <p className='text-justify lg:w-1/2 text-center mx-auto mt-5 text-secondary text-[17px]  leading-[30px]'>
                                I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                            </p> */}
                        </div>

                        <div className="px-0 lg:px-10 flex flex-wrap md:flex-wrap basis-2/6 md:justify-center bg-[#050816]">

                            <div className="w-1/5 lg:hidden" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
                                <div class="grow-1 ">
                                    <div class="mx-0 md:mx-3">
                                        <div className="w-1 h-14 sm:h-10  bg-white t-[-65px] mx-auto" />
                                        <img src={c1} className="w-10 h-10 rounded-full bg-white mx-auto" alt="" />
                                        <div className="w-1 h-96 sm:h-80  bg-white t-[-65px] mx-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="grow w-4/5 p-0 sm:p-5 lg:hidden" data-aos="fade-left" data-aos-delay="500" data-aos-duration="3000">
                                <div className="mt-3">
                                    <div className="relative bg-[#1a1536] rounded p-3 sm:p-5 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute  w-6 h-6 top-[50px] md:top-4 text-purple-600 left-[-10px] sm:left-[-20px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                        </svg>

                                        <h3 className="text-sm font-bold text-green-400">React,js Developer </h3>
                                        <p className="text-xs mt-1 font-bold text-red-400">Starbucks</p>
                                        <ul className="mx-5 list-disc text-justify sm:text-start">
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/5 lg:hidden" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
                                <div class="grow-1">
                                    <div class="mx-0 md:mx-3">
                                        <div className="w-1 h-14 sm:h-10 bg-white t-[-65px] mx-auto" />
                                        <img src={c2} className="w-10 h-10 rounded-full bg-white mx-auto" alt="" />
                                        <div className="w-1 h-96 sm:h-80 bg-white t-[-65px] mx-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="grow w-4/5 p-0 sm:p-5 lg:hidden" data-aos="fade-left" data-aos-delay="500" data-aos-duration="3000">
                                <div className="mt-3 ">
                                    <div className="relative bg-[#1a1536] rounded p-3 sm:p-5 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-6 h-6 top-[50px] md:top-4 text-purple-600 left-[-10px] sm:left-[-20px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                        </svg>

                                        <h3 className="text-sm font-bold text-green-400">React Native Developer</h3>
                                        <p className="text-xs mt-1 font-bold text-red-400">Tesla</p>
                                        <ul className="mx-5 list-disc text-justify sm:text-start">
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/5 lg:hidden" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
                                <div class="grow-1">
                                    <div class="mx-0 md:mx-3">
                                        <div className="w-1 h-14 sm:h-10 bg-white t-[-65px] mx-auto" />
                                        <img src={c3} className="w-10 h-10 rounded-full bg-white mx-auto" alt="" />
                                        <div className="w-1 h-96 sm:h-80 bg-white t-[-65px] mx-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="grow w-4/5 p-0 sm:p-5 lg:hidden" data-aos="fade-left" data-aos-delay="500" data-aos-duration="3000">
                                <div className="mt-3 ">
                                    <div className="relative bg-[#1a1536] rounded p-3 sm:p-5 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-6 h-6 top-[50px] md:top-4 text-purple-600 left-[-10px] sm:left-[-20px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                        </svg>

                                        <h3 className="text-sm font-bold text-green-400">Web Developer</h3>
                                        <p className="text-xs mt-1 font-bold text-red-400">Shopify</p>
                                        <ul className="mx-5 list-disc text-justify sm:text-start">
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/5 lg:hidden" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
                                <div class="grow-1">
                                    <div class="mx-0 md:mx-3">
                                        <div className="w-1 h-14 sm:h-10 bg-white t-[-65px] mx-auto" />
                                        <img src={c4} className="w-10 h-10 rounded-full bg-white mx-auto" alt="" />
                                        <div className="w-1 h-96 sm:h-80 bg-white t-[-65px] mx-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="grow w-4/5 p-0 sm:p-5 lg:hidden" data-aos="fade-left" data-aos-delay="500" data-aos-duration="3000">
                                <div className="mt-3 ">
                                    <div className="relative bg-[#1a1536] rounded p-3 sm:p-5 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-6 h-6 top-[50px] md:top-4 text-purple-600 left-[-10px] sm:left-[-20px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                        </svg>

                                        <h3 className="text-sm font-bold text-green-400">Full stack Developer</h3>
                                        <p className="text-xs mt-1 font-bold text-red-400">Meta</p>
                                        <ul className="mx-5 list-disc text-justify sm:text-start">
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>





                            {/* ----------- 1 row -------------- */}
                            <div className="basis-2/6 p-0 md:p-1 hidden lg:block" data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000" >
                                <div className="mt-3 mr-2">
                                    <div className="relative bg-[#1a1536] rounded p-5 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute mt-3 w-6 h-6  text-purple-600 right-[-20px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                        </svg>

                                        <h3 className="text-sm font-bold text-green-400">ReactJS  Developer </h3>
                                        <p className="text-xs mt-1 font-bold text-red-400">Starbucks</p>
                                        <ul className="mx-5 list-disc">
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class=" grow-1 hidden lg:block" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                                <div class="mx-3">
                                    <div className="w-1 sm:h-10 h-20 bg-white t-[-65px] mx-auto" />

                                    <img src={c1} className="w-10 h-10 rounded-full bg-white " alt="" />
                                    <div className="w-1 sm:h-80 h-40 h-40 bg-white t-[-65px] mx-auto" />
                                </div>
                            </div>

                            <div class="basis-2/6 p-0 md:p-1 hidden lg:block" data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" >
                                <div class="m-3">
                                    <p className='text-xl mt-10'>March 2023 - April 2024</p>
                                </div>
                            </div>


                            {/* ----------- 2 row -------------- */}
                            <div class="md:w-full md:w-1/2 lg:w-1/3 p-0 md:p-1 hidden lg:block" data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
                                <div class="m-3">
                                    <p className='text-xl mt-10 text-end'>March 2023 - April 2024</p>
                                </div>
                            </div>
                            <div class="grow-0 hidden lg:block" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                                <div class="mx-3 my-0">
                                    <div className="w-1 sm:h-10 h-20 bg-white t-[-65px] mx-auto" />

                                    <img src={c2} className="w-10 h-10 rounded-full bg-white " alt="" />
                                    <div className="w-1 sm:h-80 h-40 h-40 bg-white t-[-65px] mx-auto" />
                                </div>
                            </div>

                            <div className="basis-2/6 p-0 md:p-1 hidden lg:block" data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
                                <div className="m-3">
                                    <div className="relative bg-[#1a1536] rounded p-5 ">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute mt-3 w-6 h-6  text-purple-600 left-[-20px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                        </svg>


                                        <h3 className="text-sm font-bold text-green-400">React Native Developer </h3>
                                        <p className="text-xs mt-1 font-bold text-red-400">Tesla</p>
                                        <ul className="mx-5 list-disc">
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            {/* ----------- 3 row -------------- */}

                            <div className="basis-2/6 p-0 md:p-1 hidden lg:block" data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
                                <div className="m-3">
                                    <div className="relative bg-[#1a1536] rounded p-5 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute mt-3 w-6 h-6  text-purple-600 right-[-20px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                        </svg>

                                        <h3 className="text-sm font-bold text-green-400">Web Developer </h3>
                                        <p className="text-xs mt-1 font-bold text-red-400">Shopify</p>
                                        <ul className="mx-5 list-disc">
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="grow-1 hidden lg:block" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                                <div class="mx-3">
                                    <div className="w-1 sm:h-10 h-20 bg-white t-[-65px] mx-auto" />

                                    <img src={c3} className="w-10 h-10 rounded-full bg-white " alt="" />
                                    <div className="w-1 sm:h-80 h-40 h-40 bg-white t-[-65px] mx-auto" />
                                </div>
                            </div>

                            <div class="basis-2/6 p-0 md:p-1 hidden lg:block" data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000"> 
                                <div class="m-3">
                                    <p className='text-xl mt-10'>March 2023 - April 2024</p>
                                </div>
                            </div>


                            {/* ----------- 4 row -------------- */}
                            <div class="md:w-full md:w-1/2 lg:w-1/3 p-0 md:p-1 hidden lg:block" data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
                                <div class="m-3">
                                    <p className='text-xl mt-10 text-end'>March 2023 - April 2024</p>
                                </div>
                            </div>
                            <div class="grow-0 hidden lg:block" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                                <div class="mx-3 my-0">
                                    <div className="w-1 sm:h-10 h-20 bg-white t-[-65px] mx-auto" />

                                    <img src={c4} className="w-10 h-10 rounded-full bg-white " alt="" />
                                    <div className="w-1 sm:h-80 h-40 h-40 bg-white t-[-65px] mx-auto" />
                                </div>
                            </div>

                            <div className="basis-2/6 p-0 md:p-1 hidden lg:block" data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
                                <div className="m-3">
                                    <div className="relative bg-[#1a1536] rounded p-5 ">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute mt-3 w-6 h-6  text-purple-600 left-[-20px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                        </svg>

                                        <h3 className="text-sm font-bold text-green-400">Full stack Developer</h3>
                                        <p className="text-xs mt-1 font-bold text-red-400">Meta</p>
                                        <ul className="mx-5 list-disc">
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
                                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                                            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}
export default Experience 