'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

const page = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const [trigger,setTrigger]=useState(false)
  return (
    <div className='mt-20'>
      <div className=' mb-10  text-white flex flex-col justify-center' style={{backgroundImage:"url(about1.jpg)",height:"300px",width:"100%",backgroundSize:"contain"}}>
        <h1 className='text-center  font-semibold  text-4xl tracking-wide  text-white' style={{ wordSpacing: "0.1rem",
        }}>About Artist Solution</h1>
        <div className='mt-8 '>
          <span className="flex items-center gap-2 justify-center font-medium" style={{  }}><Link href='/' className="hover:text-blue-400">Home</Link><span className='text-lg align-middle text-gray-400 font-medium'>&gt;</span><span className="text-gray-400">About Us</span></span>
        </div>
      </div>
      <div className=''>
        <div className='mt-14 text-blue-600 mx-auto text-center font-bold text-3xl' style={{ color: "" }}>We're Artist Solution</div>

        <p className='text-lg w-4/5 mb-32 mt-8 text-center mx-auto opacity-100' style={{ color: "" }}>
          EXPERIENCE: EXCELLENCE: EXUBERANCE is our key to customer satisfaction.

          Artist Solution is the Best and Top IT Company in surat which has the skill and expertise to facilitate complex business solutions.
        </p>

        <div className='flex justify-around gap-4 w-4/5 mb-10  mx-auto text-justify items-center' data-aos="fade-up" data-aos-duration="2000">
          <div className='overflow-visible h-96 w-1/4'>
            <p className=' text-3xl' style={{ color: "#343f52" }}>OUR <span className='font-medium text-3xl' style={{ color: "#343f52" }}>MISSION</span></p>
            <p className='mt-4 opacity-70'>Artist Solution's primary mission is to create a long-term strong relationship with our valuable customers. We have managed it successfully by designing a website with the client’s inputs and our expert team's ideas. Our mission is to serve various industries through advanced technology and help them to achieve success.

            </p>
          </div>
          <div className='overflow-visible w-1/4 h-96 '>
            <p className=' text-3xl' style={{ color: "#343f52" }}>OUR <span className='font-medium text-3xl' style={{ color: "#343f52" }}>VISION</span></p>
            <p className='mt-4 opacity-70'>Our team of experts always works hard to achieve customer success and trust. We continuously make improvements to increase status, trust, and reputation as the best website development, software development, mobile app development, and digital marketing company. We aim to achieve top customer satisfaction rates by maintaining a healthy relationship with clients through excellent services and professional skills.

            </p>
          </div>
          <div className='overflow-visible w-1/4 h-96 '>
            <p className=' text-3xl' style={{ color: "#343f52" }}>WHY <span className='font-medium text-3xl' style={{ color: "#343f52" }}>US</span></p>
            <p className='mt-4 opacity-70'>We harness the cutting-edge tools and frameworks in our craft. Your aspirations are our compass, and your obstacles are the sparks that ignite our ingenuity. Venture into the impressive anthology of our triumphant endeavors and contented patrons. Our unwavering dedication to perpetual enhancement keeps us at the forefront of this ever-evolving landscape. With unwavering transparency, we illuminate your path, ensuring you're perpetually enlightened.

            </p>
          </div>
        </div>

      </div>
      <ScrollTrigger onEnter={()=>setTrigger(true)} onExit={()=>setTrigger(false)}>
      <div className=' text-white opacity-80 w-full  flex items-center justify-around py-16' style={{
      
        width: "100vw",
        backgroundImage: "url(/trusted.webp)",
        // position: "relative",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(14, 13, 13, 0.6)",
        backgroundBlendMode: "multiply",
        zIndex: "-1"
      }} >
      
        <div className='text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <p className='text-3xl font-bold mt-2 text-[#F4CE14]'>{trigger && <CountUp start={0} end={1000} duration={3}/>}+</p>
          <p className='text-xl font-semibild  '>Happy Clients</p>
        </div>
        <div className='text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <p className='text-3xl font-bold mt-2 text-[#F4CE14]'>{trigger && <CountUp start={0} end={4} duration={3}/>} </p>
          <p className='text-xl font-semibold '>Year In Business</p>
        </div>
        <div className='text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>

          <p className='text-3xl font-bold mt-2 text-[#F4CE14]'>{trigger && <CountUp start={0} end={10} duration={3}/>}</p>
          <p className='text-xl font-semibold '>Projects</p>
        </div>
        <div className='text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>

          <p className='text-3xl font-bold mt text-[#F4CE14]'>{trigger && <CountUp start={0} end={20} duration={3}/>}</p>
          <p className='text-xl font-semibold '>Team's</p>
        </div>
      </div>
        </ScrollTrigger>

      <div className='bg-gray-100 gap-10 px-12 py-12 flex justify-center items-center' data-aos="fade-up" data-aos-duration="2000">
        <Image className="flex-1 will-change-transform" src='/dev2.jpg' height={700} width={460} alt="developer" style={{
    transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"}} />
        <div className='flex-1'>
          <p className=' text-3xl' style={{ color: "#343f52" }}>WHY <span className='font-medium text-3xl' style={{ color: "#343f52" }}>WE'RE THE BEST</span></p>
          <div className='mt-6 '>
            <p className=' text-xl font-medium' style={{ color: "#343f52" }}>CREATIVE IDEAS</p>
            <p className='opacity-70'>Our creative ideas help you to achieve the best online presence. We believe in simple and best solutions.</p>

            <p className=' text-xl font-medium mt-4' style={{ color: "#343f52" }}>AWARD WINNING</p>
            <p className='opacity-70'>We have received many Google Ads certificates, Facebook Ads certificates this ensures that we design a strategic campaign to achieve 100% ROI.</p>
            <p className=' text-xl font-medium mt-4' style={{ color: "#343f52" }}>RAPID SOLUTION</p>
            <p className='opacity-70'>Our expert and energetic team provides vibrant and dynamic solutions to any problem at a time.</p>
            <p className=' text-xl font-medium mt-4' style={{ color: "#343f52" }}>CUSTOMER SUPPORT</p>
            <p className='opacity-70'>Our dedicated experts provide support to the customers during working hours.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
