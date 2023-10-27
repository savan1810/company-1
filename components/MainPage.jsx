"use client"
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import '../style/style.css'
import Ticker from 'react-ticker'
import Link from 'next/link'


const MainPage = () => {
  return (
    <div className='mt-20  -z-10 bg-gradient-to-r  from-[#F5F5F5] to-[#DFD7BF] w-full' style={{
      height: "600px",
    }} >
      <div className=' flex items-center gap-10 border-box' data-aos="fade-up" data-aos-duration="1000">
        <div className=' mt-24 w-1/2 ml-20 '>
          <h1 className=' font-[500] tracking-wide  ' style={{
            fontSize: "50px", color: "#2b3342", wordSpacing: "0.1rem",
            fontFamily: "josefin sans", lineHeight: "normal"
          }}>Elevate Your Business With Innovative IT Solutions.</h1>
          <div className='flex items-center mt-6 '>
            <h2 className=' text-lg   font-medium' style={{ color: "#6d788c" }}>We're your trusted partner for managed Website Development, Software Development, Mobile Application Development, Digital Marketing and more. Our commitment is to your success, as we blend strategic insights with cutting-edge technology. Join us in the digital transformation journey for excellence.</h2>
            <span className="italic text-3xl font-bold ml-3 text-[#e7b900] " style={{ color: "" }}>

            </span>
          </div>
          <button className='mt-10 text-white  animate-bounce font-medium px-8 py-3 rounded-full bg-color  bg-gradient-to-r from-[#09203F] to-[#537895] '>

            <Link href="/contact"  >Get In Touch</Link>
          </button>
          
        </div>
        <Image className="ml-10  mt-20" src='/Best_Digital_Marketing_Solution_in__india.png' height={540} width={460} alt="developer" />
      </div>
      {/* <p className='w-full absolute top-60 text-9xl text-center   font-extrabold textStroke' style={{}}>ARTIST SOLUTION ARTIST SOLUTION </p> */}
    </div>
  )
}

export default MainPage
