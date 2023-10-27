"use client"

import Link from 'next/link'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faSkype, faSquareXTwitter, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
    const bubbleTran = useRef()

    const mouseLeave = () => {
        bubbleTran.current.style.transform = "translate(0px,0px)"
        bubbleTran.current.style.transition = "transform 0.7s"
    }
    const mouseEnter = () => {
        bubbleTran.current.style.transform = "translate(145px,0px)"
        bubbleTran.current.style.transition = "transform 0.7s"
    }

    return (

        <>
            <div className='relative my-6 pb-1 w-4/5 mx-auto rounded-3xl  bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3] ' style={{}}>
                <h1 className='text-left font-semibold py-8 px-44  w-5/6 tracking-wide text-4xl text-[#0A4D68]' style={{ fontFamily: "josefin sans", color: "", lineHeight: "150%" }}>"Join Our Community by using our
                    services and grow your business."
                </h1>
                <div className="w-full text-center ml-60 mb-10 -mt-10">

            <button className='relative justify-end   mt-4  ml-6 text-lg font-medium tracking-wide text-red-600' style={{color:""}} ><Link href="/contact" className='  ml-4 bubble bubble1'>  TRY IT FOR FREE   <span className='ml-2 text-xl'>&rarr;</span></Link></button>
 
            </div>
            </div><div className='py-10 px-20 w-full flex-col ' style={{ backgroundImage: "url(/footer.jpg)",
                backgroundSize: 'cover' }}>
                <div className=' flex justify-around border-b border-gray-500 '>

                    <div className='max-w-[450px] '>
                        <h1 className='text-2xl text-white font-bold'>Artist Solution</h1>
                        <p className='text-[16px] mt-10 italic font-medium opacity-70 ' style={{ color: "#dce2f3", fontFamily: "", lineHeight: "200%" }}>Hey Still Confused? No Worries, You Can Directly Chat With Our Sales Representatives, They Will Assist You With Any Technical Related Business Concerns.
                        </p>

                    </div>

                    <div className=''>
                        <h1 className='text-xl text-white font-medium border-b border-blue-400'>Get In Touch</h1>

                        <p className='mt-10 italic font-medium opacity-70' style={{ color: "#dce2f3", fontFamily: "" }}> Surat,INDIA</p>
                        <p className='mt-4 italic font-medium opacity-70' style={{ color: "#dce2f3" }}> <Link href='/'>hr@gmail.com</Link></p>
                        <p className='mt-4 italic font-medium opacity-70' style={{ color: "#dce2f3" }}> +91 123456789</p>

                    </div>
                    <div className=''>
                        <h1 className='text-xl text-white font-medium border-b border-blue-400'>Help & Advise</h1>
                        <ul className='mt-10 italic font-medium opacity-70' style={{ color: "#dce2f3", fontFamily: "" }}>
                            <li className='mb-2 '><Link href='' className='relative provience_trans '>About Us</Link></li>
                            <li className='mb-2 '><Link href='' className='relative provience_trans'>Career</Link></li>
                            <li className='mb-2 '><Link href='' className='relative provience_trans'>Blog</Link></li>
                            <li className='mb-2 '><Link href='' className='relative provience_trans'>Contact Us</Link></li>
                            <li className='mb-6 '><Link href='' className='relative provience_trans'>Privacy & policy</Link></li>
                        </ul>

                    </div>
                </div>
                <div className='flex items-center justify-between -mb-10'>
                    <p className='py-6 px-20 italic font-medium opacity-80' style={{ color: "#dce2f3" }}>
                        &#169;2023 All rights reserved by Artist Solution.</p>
                    <div className='flex gap-4 cursor-pointer' style={{ color: "#dce2f3" }}>

                        <FontAwesomeIcon icon={faSquareXTwitter} className='w-8 h-8  hover:-translate-y-2 transition ease-in-out delay-200 duration-300' />
                        <FontAwesomeIcon icon={faInstagramSquare} className='w-8 h-8  hover:-translate-y-2 transition ease-in-out delay-200 duration-300' />
                        <FontAwesomeIcon icon={faWhatsappSquare} className='w-8 h-8 hover:-translate-y-2 transition ease-in-out delay-200 duration-300' />
                        <FontAwesomeIcon icon={faSkype} className='w-8 h-8 hover:-translate-y-2 transition ease-in-out delay-200 duration-300' />
                    </div>

                </div>
            </div></>

    )
}

export default Footer 
