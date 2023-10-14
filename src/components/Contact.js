import React from 'react'
// import t1 from '../assets/testimonials/devguy3.gif'
import t2 from '../assets/testimonials/a85c0dcdcc774c6f340b07518363d6fb.gif'


const Contact = () => {
    return (
        <div>

            <section className='py-5 md:py-10 bg-[#050816] text-white' id='contact'>
                <div className="px-5 container mx-auto md:px-32">
                    <div className="py-5">
                        <p className='sm:text-[18px] text-[14px] text-center text-secondary uppercase tracking-wider' data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="50">GET IN TOUCH</p>
                        <h2 className='text-center font-bold text-3xl lg:text-5xl text-[#915eff]' data-aos="fade-left"  data-aos-duration="2000" data-aos-delay="50">Contact Us</h2>
                        {/* <p className='text-justify lg:w-1/2 text-center mx-auto mt-5 text-secondary text-[17px]  leading-[30px]' data-aos="fade-up"  data-aos-duration="3000" data-aos-delay="50">
                            I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                        </p> */}
                    </div>


                    <div className="flex flex-wrap justify-center p-3 lg:p-5">
                        <div className="w-full lg:w-1/2 py-5 px-2 lg:-5" >
                            <div className="p-4 bg-[#080223]  border-t-4 rounded-b-xl border-red-300 shadow" data-aos="fade-right"  data-aos-duration="2000" data-aos-delay="500">
                                <h1 className='uppercase font-bold my-5 text-center'>Get in touch</h1>
                                <div className="text-white my-5">
                                    <label htmlFor="" className="text-white">Your Name :</label> <br />
                                    <input type="text" className='mt-2 p-1 bg-[#080235] rounded-t focus:outline-none border-b w-full' placeholder='Whats your Name' name="" id="" />
                                </div>

                                <div className="text-white my-5">
                                    <label htmlFor="" className="text-white">Your Email :</label> <br />
                                    <input type="text" className='mt-2 p-1 bg-[#080235] rounded-t focus:outline-none border-b w-full' placeholder='Whats your Email' name="" id="" />
                                </div>

                                <div className="text-white my-5">
                                    <label htmlFor="" className="text-white">Enter your Message:</label> <br />
                                    <textarea name="" id="" className='mt-2 p-1 bg-[#080235] rounded-t focus:outline-none border-b w-full' cols="30" placeholder='What do you want to say?' rows="10"></textarea>

                                </div>

                                <div className="text-white my-5 flex justify-center">
                                    <button className='p-5 bg-red-400 shadow-2xl rounded-xl'> Send Message</button>

                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 py-5 px-2 lg:-5  my-auto" data-aos="fade-left"  data-aos-duration="2000" data-aos-delay="500">
                            <div className="p-4  shadow-lg my-auto mx-auto">
                                <img src={t2} className=' rounded-xl ' alt="" />
                            </div>
                        </div>
                    </div>







                </div>
            </section>

        </div>
    )
}

export default Contact