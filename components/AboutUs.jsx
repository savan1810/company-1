'use client'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='bg-white  my-10 bg-opacity-90  w-full  border-red-600  rounded-t-[100px] '>
        <div className='w-4/5 mx-auto' data-aos="fade-up"
     data-aos-duration="2000">
        
            <h2 className='pt-4 pb-2 font-medium text-purple-500'>HOW IT ALL STARTED...</h2>
            <h2 className='mb-10   pb-6  text-left font-semibold  text-3xl' style={{ fontFamily: "josefin sans", color: "#2b3342" }}>CREATIVITY & INNOVATION</h2>
            <div className=' -mt-10  text-justify text-lg' style={{ color: "#6d788c", fontFamily: "lexend deca" }}>
                <p className=''>
                    Artist Solution is result-oriented IT company in India and USA. With a team of top talented people who are driven to give you the custom software development solutions and make your life easier.
                </p>

                <br />
                <p className=''>
                    We are dedicated to develop result driven websites, applications and software that strictly meet business requirements and catering a wide spectrum of projects.
                </p>
                <br />
                <p>
                We pride ourselves on our innovation and dedication to provide the best of industry standards to our clients. Our goal is to help our clients grow their businesses and reach their full potential. Contact us today to learn more about our services!
                </p>
        </div>
            </div>
        </div>
    )
}

export default AboutUs
