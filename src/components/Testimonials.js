import React from "react";

import { testimonials } from '../constants'

const TestimonialsCard = ({testimonial, name, designation, company, image}) => (
    <div className="w-full md:2/4 lg:w-1/3 py-5 px-2 lg:p-3" data-aos="zoom-in-up"  data-aos-duration="1000" data-aos-delay="50">
        <div className="p-5 md:p-10 bg-[#080223] rounded-xl border border-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <p className="mt-3">{testimonial}</p>
            <div className="flex mt-3">
                <div className="w-3/4">
                    <p><span>@</span> {name}</p>
                    <p className="text-neutral-600 font-bold">{designation} of {company}</p>
                </div>
                <div className="w-1/4 my-auto">
                    <img src={image} className="w-10 h-10  rounded-full" alt="" />
                </div>

            </div>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <div className="" >
            <section className="py-5 md:py-10 bg-[#050816] text-white" id="testimonials">
                <div className="px-0 md:px-5 container mx-auto md:px-32">
                    <div className="py-5" data-aos="zoom-in"  data-aos-duration="2000" data-aos-delay="50">
                        <p className='sm:text-[18px] text-[14px] text-center text-secondary uppercase tracking-wider'>What Others Say</p>
                        <h2 className='text-center mt-3 font-bold text-3xl lg:text-5xl text-[#915eff]'>Testimonials</h2>
                    </div>

                    <div className="flex flex-wrap justify-center bg-[#130e2f] p-3 rounded-xl lg:p-5">
                        {testimonials.map((test, index) => {
                            return (
                                <TestimonialsCard key={index} testimonial={test.testimonial} name={test.name} 
                                    designation={test.designation} 
                                    company={test.company} 
                                    image={test.image}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials