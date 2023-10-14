import React from 'react'
// import t1 from '../assets/testimonials/devguy3.gif'
import t1 from '../assets/man1.png'
// import t1 from '../assets/home/39998-web-development.gif'
// import t1 from '../assets/home/software-development-gif.gif'
// import t1 from '../assets/home/softwaredev.gif'
// import t1 from '../assets/home/unnamed.gif'





const Home = () => {
  return (
    <div className="" id='home'>
      <section className="bg-hero-bg bg-cover bg-no-repeat bg-center w-full h-screen mx-auto" id='home'>
        <div className="px-6 sm:px-16 text-white absolute top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 h-40 bg-gradient-to-b from-indigo-500" />
          </div>
          <div className="">

            {/* animate__animated animate__fadeInDown  */}
            <h1 className="text-white font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2" data-aos="fade-up">
              Hi, I'm <span className='text-[#915EFF]'>Medas</span>
            </h1>
            <p className="animate__animated animate__fadeInLeft mt-2 text-white-100 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
              I develop 3D visuals, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>


        </div>
        <div className="absolute bottom-20  md:bottom-[-40px] lg:bottom-[150px] w-full flex md:justify-end mx-auto items-center text-white">
          <div className="px-6 sm:px-16 lg:pr-[10rem] text-white hover:translate-y-9">
            <img src={t1} className='right-1 drop-shadow-[0px_0px_20px_white] ' alt="" data-aos="fade-down-left"  />

          </div>
        </div>


        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 absolute inset-x-0 bottom-0 text-[#915EFF] mx-auto animate-bounce h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </section>
    </div>

  )
}

export default Home