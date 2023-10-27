"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    const image1 = useRef()
    const image2 = useRef()
    const image3 = useRef()
    const image4 = useRef()
    const image5 = useRef()
    const image6 = useRef()
    const image7 = useRef()
    const image8 = useRef()
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='bg-[#f8f9fa]  w-full  ' >
            <div className='w-4/5 mx-auto'>

                <h2 className='pt-4 pb-2 font-medium text-center text-orange-400'>OUR BEST SERVICES</h2>
                <h2 className='mb-10   pb-6  text-center font-semibold  text-3xl' style={{ fontFamily: "josefin sans", color: "#2b3342" }}>SERVICES</h2>
                <div className=' mt-10 flex  justify-between  flex-wrap ' style={{ fontFamily: "lexend deca" }}>
                    <div className='flex-col gap-10'>

                        <div data-aos="zoom-in-right" data-aos-duration="2000" className='h-[280px] w-[320px] bg-white text-[#2b3342]  mb-20  hover:text-white shadow-xl  hover:bg-gradient-to-r from-[#687EFF] to-[#98E4FF] cursor-pointer mx-auto' onMouseEnter={() => { image1.current.style.display = "none", image2.current.style.display = "block" }} onMouseLeave={() => { image1.current.style.display = "block", image2.current.style.display = "none" }}>
                            <div className='w-full flex gap-2 transition ease-in-out  duration-75 '>
                                <div className='w-full relative h-full ml-4'>
                                    <Image src='/design.png' ref={image1} className='mx-auto absolute mt-5  left-4 transition ease-in-out  duration-75' height={50} width={50} alt='' />
                                    <Image src='/design_white.png' ref={image2} className='hidden mx-auto absolute mt-5  left-4  transition ease-in-out  duration-75' height={50} width={50} alt='' />
                                </div>
                                <div className='flex-col'>

                                    <h3 className='text-2xl font-medium mt-5  transition ease-in-out  duration-75   ' style={{ fontFamily: "josefin sans" }}>
                                        UI/UX Design Development
                                    </h3>
                                    <p className='w-4/5   mt-4 opacity-70 ' style={{ fontFamily: "" }}>
                                        We do UI/UX logo designing, Branding design using Photoshop, Illustrator, Adobe XD, Video Editing using After Effect.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in-right" data-aos-duration="2000" className='h-[280px] w-[320px] bg-white text-[#2b3342]  mb-20  hover:text-white shadow-xl  hover:bg-gradient-to-r from-[#5B0888] to-[#9D76C1] cursor-pointer mx-auto' onMouseEnter={() => { image3.current.style.display = "none", image4.current.style.display = "block" }} onMouseLeave={() => { image3.current.style.display = "block", image4.current.style.display = "none" }}>
                            <div data-aos="zoom-in" className='w-full flex gap-2 transition ease-in-out  duration-75 '>
                                <div className='w-full relative h-full ml-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" ref={image3} className="w-12 text-[#5B0888] h-12 mx-auto absolute mt-5  left-4 transition ease-in-out  duration-75">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" ref={image4} className="hidden w-12 text- h-12 mx-auto absolute mt-5  left-4 transition ease-in-out  duration-75">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>


                                </div>
                                <div className='flex-col'>

                                    <h3 className='text-2xl font-medium mt-5  transition ease-in-out  duration-75   ' style={{ fontFamily: "josefin sans" }}>
                                        App <br /> Development
                                    </h3>
                                    <p className='w-4/5   mt-4 opacity-70 ' style={{ fontFamily: "" }}>
                                        Design and Develop Custom Mobile Application for IOS and Android. Integrate the Apps with various APIs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src='/devop.png' height={600} width={350} alt="developer" />
                    </div>
                    <div className='flex items-center gap-10'>

                        <div data-aos="zoom-in-left"  data-aos-duration="2000" className='h-[280px] w-[320px] bg-white text-[#2b3342]  mb-20  hover:text-white shadow-xl  hover:bg-gradient-to-r from-[#F86F03] to-[#FFB200] cursor-pointer mx-auto' onMouseEnter={() => { image5.current.style.display = "none", image6.current.style.display = "block" }} onMouseLeave={() => { image5.current.style.display = "block", image6.current.style.display = "none" }}>
                            <div className='w-full flex gap-2 transition ease-in-out  duration-75 '>
                                <div className='w-full relative h-full ml-4'>
                                    <Image src='/computer.png' ref={image5} className='mx-auto absolute mt-5  left-4 transition ease-in-out  duration-75' height={50} width={50} alt='' />
                                    <Image src='/computer_white.png' ref={image6} className='hidden mx-auto absolute mt-5  left-4  transition ease-in-out  duration-75' height={50} width={50} alt='' />
                                </div>
                                <div className='flex-col'>

                                    <h3 className='text-3xl font-medium mt-5  transition ease-in-out  duration-75   ' style={{ fontFamily: "josefin sans" }}>
                                        Web<br />  Development
                                    </h3>
                                    <p className='w-4/5   mt-4 opacity-70 ' style={{ fontFamily: "" }}>
                                    We provide Responsive Website Design and Development services that help you achieve higher returns from your digital investment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* <div className='strokeEffect text-transparent'>SERVICES</div> */}
            </div>
        </div>

    )
}

export default Service
