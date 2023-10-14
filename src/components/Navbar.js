import React from 'react'
// import { useEffect } from 'react';
import { Link } from 'react-scroll'
// import logo from '../assets/portfolio_logo.png'
// import AOS from 'aos';

// import 'aos/dist/aos.css'; 

const Navbar = () => {
    // useEffect(()=>{
    //     AOS.init();
    //   },[])

    return (
        <div>
            <section  >
                <nav className='bg-[#050816] p-5' >
                    <div className="container md:pl-[60px] px-2 md:px-5  mx-auto" data-aos="fade-down" >
                        <div className="flex text-justify">
                            <div className="logo text-white text-justify">
                                <a href="" className='font-bold t text-2xl font-mono font-extrabold text-red-200'>M<sup>2</sup>CODER</a>
                                {/* <a href="" className='font-bold text-2xl'>
                                    <img src={logo} alt="" className='h-8' srcSet="" />
                                </a> */}

                            </div>

                            <div className="menu my-auto mx-auto mr-0 ">
                                <ul className='md:flex font-bold text-white hidden md:mr-0'>
                                    <li className='lg:pr-5'>
                                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2  border-purple-100 hover:border-purple-300 hover:border-b-4 transform ease-in-out duration-200 ' >Home</Link>
                                    </li>
                                    <li className='lg:pr-5'>
                                        <Link activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2  border-purple-100 hover:border-purple-300 hover:border-b-4 transform ease-in-out duration-200 ' >Experience</Link>
                                    </li>
                                    <li className='lg:pr-5'>
                                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2  border-purple-100 hover:border-purple-300 hover:border-b-4 transform ease-in-out duration-200 ' >Skill</Link>
                                    </li>
                                    <li className='lg:pr-5'>
                                        <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2  border-purple-100 hover:border-purple-300 hover:border-b-4 transform ease-in-out duration-200 ' >Project</Link>
                                    </li>
                                    <li className='lg:pr-5 md:hidden lg:block'>
                                        <Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2  border-purple-100 hover:border-purple-300 hover:border-b-4 transform ease-in-out duration-200'>Testimonial</Link>
                                    </li>
                                    <li className='lg:pr-5'>
                                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2  border-purple-100 hover:border-purple-300 hover:border-b-4 transform ease-in-out duration-200'>Contact</Link>
                                    </li>
                                    <li className='lg:pr-5 tracking-wide hover:scale-110 duration-300 md:hidden lg:block'>
                                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2  border-purple-100 hover:border-purple-300 hover:border-b-4 transform ease-in-out duration-200 text-center'>Register </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Navbar