import React from 'react'

import { technologies } from '../constants';

const SkillCard = ({ icon,name,fun }) => (

    <div className="w-full  md:w-2/4 lg:w-1/4 py-5 px-2 lg:p-5" data-aos={fun} data-aos-duration="1000" data-aos-delay="50">
        <div className="p-10 bg-[#110c26] rounded-xl border border-white shadow-lg">
            <img src={icon} alt="" className="mx-auto rounded-full bg-white p-2 w-[90px] h-[90px]" />
            <p className='text-center pt-10 text-white font-bold text-lg'>{name} </p>
        </div>
    </div>
);



const Skills = () => {
    return (
        <div>
            <section className='py-5 md:py-10 bg-[#050816] text-white' id='skills'>
                <div className="px-5 container mx-auto md:px-16">
                    <div className="py-5" data-aos="zoom-in"  data-aos-duration="2000" data-aos-delay="50">
                        <p className='sm:text-[18px] text-[14px] text-center text-secondary uppercase tracking-wider'>about my skill</p>
                        <h2 className='text-center font-bold text-3xl lg:text-5xl text-[#915eff]'>Know Language</h2>
                        {/* <p className='text-justify lg:w-1/2 text-center mx-auto mt-5 text-secondary text-[17px]  leading-[30px]'>
                            I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                        </p> */}
                    </div>

                    <div className="flex flex-wrap justify-center p-3 lg:p-10">
                        {technologies.map((tech, index) => {
                            return (
                                <SkillCard key={index} icon={tech.icon} name={tech.name} fun={tech.fun} />
                            )})
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills