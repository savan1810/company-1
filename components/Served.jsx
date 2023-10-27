
'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Served = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div>
            <div className=' w-full text-white' >
                <div className='  w-full  ' id='1' >
                    <div className='w-4/5 mx-auto'>
                        <h2 className='   pt-10 pb-2  text-center font-semibold  text-3xl text-white' style={{ fontFamily: "josefin sans"}}> WE SERVED ALL <span className='text-orange-400'>INDUSTRIES </span></h2>
                        <div className='text-center opacity-90'>Our services cater to diverse industries, ensuring comprehensive support for businesses across the board.</div> 
                    </div>
                    <div className='my-10 gap-4 w-4/5 text-blue-300 mx-auto flex justify-around items-center flex-wrap' data-aos="zoom-in"  data-aos-duration="2000">
                        <div className='flex gap-4  cursor-pointer mt-2 bg-white bg-opacity-20 hover:border-orange-300   w-56 rounded-full p-[12px] items-center'>
                            <Image src='/Travel.svg' height={60} width={60} alt='' className='bg-blue-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Travels & Tourism</p>
                        </div>
                        <div className='flex gap-4 cursor-pointer mt-2 hover:border-orange-300   w-56 bg-white bg-opacity-20 rounded-full  p-[12px]  items-center'>
                            <Image src='/Banking-Finance.svg' height={60} width={60} alt='' className='bg-orange-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Banking-Finance</p>
                        </div>
                        <div className='flex gap-4 cursor-pointer mt-2 hover:border-orange-300   w-56 bg-white bg-opacity-20 rounded-full  p-[12px]  items-center'>
                            <Image src='/Media.svg' height={60} width={60} alt='' className='bg-red-100 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Media & Entertainment</p>
                        </div>
                        <div className='flex gap-4  cursor-pointer mt-2 hover:border-orange-300  w-56 bg-white bg-opacity-20 rounded-full  p-[12px] items-center'>
                            <Image src='/Fitness.svg' height={60} width={60} alt='' className='bg-green-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Fitness</p>
                        </div>
                        <div className='flex gap-4 cursor-pointer mt-2 hover:border-orange-300   w-56 bg-white bg-opacity-20 rounded-full  p-[12px] items-center'>
                            <Image src='/health-care.svg' height={60} width={60} alt='' className='bg-red-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Healthcare</p>
                        </div>
                        <div className='flex gap-4  cursor-pointer mt-2 hover:border-orange-300  w-56 bg-white bg-opacity-20 rounded-full  p-[12px] items-center'>
                            <Image src='/hotel.svg' height={60} width={60} alt='' className='bg-red-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Hotel & Restaurants</p>
                        </div>
                        <div className='flex gap-4 cursor-pointer mt-2 hover:border-orange-300   w-56 bg-white bg-opacity-20 rounded-full  p-[12px] items-center'>
                            <Image src='/Sport.svg' height={60} width={60} alt='' className='bg-green-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Sports</p>
                        </div>
                        <div className='flex gap-4 cursor-cursor-pointer mt-2 hover:border-orange-300   w-56 bg-white bg-opacity-20 rounded-full  p-[12px] items-center'>
                            <Image src='/e-commerce.svg' height={60} width={60} alt='' className='bg-orange-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Retail & E-commerce</p>
                        </div>
                        
                        <div className='flex gap-4 cursor-pointer mt-2 hover:border-orange-300   w-56 bg-white bg-opacity-20 rounded-full  p-[12px] items-center'>
                            <Image src='/Education.svg' height={60} width={60} alt='' className='bg-green-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Education</p>
                        </div>
                        <div className='flex gap-4 cursor-pointer mt-2 hover:border-orange-300   w-56 bg-white bg-opacity-20 rounded-full  p-[12px] items-center'>
                            <Image src='/Real-Estate.svg' height={60} width={60} alt='' className='bg-red-200 rounded-full p-3'/>
                            <p className=' font-semibold opacity-90 '>Real-Estate</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Served
