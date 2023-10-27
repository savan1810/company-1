'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style/style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testonomial() {
  return (
    <div className='  -z-10  w-full mx-auto' >
      <div className='   mx-auto  py-10'>


     

        <h2 className='pt-4  text-center  font-semibold  text-3xl' style={{ fontFamily: "josefin sans", color: "#2b3342" }}>WHAT OUR CLIENTS SAY ABOUT US</h2>


        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide >
            <div className='flex justify-around gap-6'>

              <div className='flex-1 my-10 p-6 rounded-xl'>
                <svg className=" mb-8" xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <path d="M38.6667 5.23417C39.4518 5.05903 40 4.37338 40 3.56708L40 1.58537C40 1.15919 39.8326 0.758953 39.529 0.459265C39.2292 0.162821 38.8341 2.00925e-06 38.415 2.04589e-06L38.3975 2.04742e-06C33.6581 0.0486532 29.8341 1.07032 27.0306 3.03581C24.161 5.04801 22.4482 8.40685 22.4482 12.0213L22.4482 27.5947C22.4482 28.9206 23.5278 30 24.8539 30L37.5936 30C38.9204 30 40 28.9206 40 27.5947L40 16.1832C40 14.8566 38.9204 13.7772 37.5936 13.7772L30.0547 13.7772L30.0547 11.0457C30.0547 7.27426 37.7857 5.43202 38.6667 5.23417ZM29.969 16.2682L37.5086 16.2682L37.5086 27.5091L24.9396 27.5091L24.9396 12.0219C24.9396 9.21835 26.256 6.62169 28.4606 5.07525C30.6697 3.52621 33.7106 2.66606 37.5086 2.51362L37.5086 2.94954C34.5287 3.69616 27.5633 5.98534 27.5633 11.0457L27.5633 13.8629C27.5633 15.1894 28.6422 16.2682 29.969 16.2682Z" fill="#5C9EFF"></path>
                  <path d="M2.40586 30L15.1455 30C16.4723 30 17.5513 28.9206 17.5513 27.5947L17.5513 16.1832C17.5513 14.8566 16.4723 13.7772 15.1455 13.7772L7.60593 13.7772L7.60593 11.0457C7.60593 7.27426 15.3369 5.43202 16.2186 5.23417C17.0037 5.05838 17.5513 4.37273 17.5513 3.56708L17.5513 1.58537C17.5513 1.15919 17.3845 0.758953 17.0809 0.458616C16.7812 0.16217 16.386 2.0092e-06 15.9663 2.04589e-06L15.9494 2.04736e-06C11.21 0.0486532 7.38534 1.06967 4.58191 3.03581C1.71295 5.04801 0.000135441 8.40685 0.000135757 12.0213L0.00013634 18.6877C0.0001364 19.3753 0.557448 19.9332 1.24582 19.9332C1.93419 19.9332 2.4915 19.3753 2.4915 18.6877L2.4915 12.0213C2.4915 9.2177 3.8079 6.62105 6.01249 5.07525C8.22163 3.52621 11.2619 2.66542 15.0606 2.51362L15.0606 2.94954C12.0806 3.69551 5.11457 5.98469 5.11457 11.045L5.11457 13.8629C5.11457 15.1888 6.19416 16.2682 7.52094 16.2682L15.0606 16.2682L15.0606 27.5091L2.4915 27.5091L2.4915 24.5005C2.4915 23.8123 1.93419 23.2551 1.24582 23.2551C0.557449 23.2551 0.000136788 23.8123 0.000136848 24.5005L0.000137119 27.5947C0.000137235 28.9213 1.07908 30 2.40586 30Z" fill="#5C9EFF"></path>
                </svg>
                <div className='opacity-80 text-justify italic tracking-wide'>

                  “Artist Solution provided excellent development knowledge to deliver a functional
                  platform and they hit all deadlines. Their team is flexible and reliable.”
                </div>
                <div className='text-blue-500 mt-6 text-normal font-semibold  tracking-wider'>
                  COOK-<span className='text-gray-500 italic'>CEO AT ABC</span>
                </div>
              </div>
              <div className='flex-1  my-10 p-6 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" className='mb-8' width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <path d="M38.6667 5.23417C39.4518 5.05903 40 4.37338 40 3.56708L40 1.58537C40 1.15919 39.8326 0.758953 39.529 0.459265C39.2292 0.162821 38.8341 2.00925e-06 38.415 2.04589e-06L38.3975 2.04742e-06C33.6581 0.0486532 29.8341 1.07032 27.0306 3.03581C24.161 5.04801 22.4482 8.40685 22.4482 12.0213L22.4482 27.5947C22.4482 28.9206 23.5278 30 24.8539 30L37.5936 30C38.9204 30 40 28.9206 40 27.5947L40 16.1832C40 14.8566 38.9204 13.7772 37.5936 13.7772L30.0547 13.7772L30.0547 11.0457C30.0547 7.27426 37.7857 5.43202 38.6667 5.23417ZM29.969 16.2682L37.5086 16.2682L37.5086 27.5091L24.9396 27.5091L24.9396 12.0219C24.9396 9.21835 26.256 6.62169 28.4606 5.07525C30.6697 3.52621 33.7106 2.66606 37.5086 2.51362L37.5086 2.94954C34.5287 3.69616 27.5633 5.98534 27.5633 11.0457L27.5633 13.8629C27.5633 15.1894 28.6422 16.2682 29.969 16.2682Z" fill="#F56A5D"></path>
                  <path d="M2.40586 30L15.1455 30C16.4723 30 17.5513 28.9206 17.5513 27.5947L17.5513 16.1832C17.5513 14.8566 16.4723 13.7772 15.1455 13.7772L7.60593 13.7772L7.60593 11.0457C7.60593 7.27426 15.3369 5.43202 16.2186 5.23417C17.0037 5.05838 17.5513 4.37273 17.5513 3.56708L17.5513 1.58537C17.5513 1.15919 17.3845 0.758953 17.0809 0.458616C16.7812 0.16217 16.386 2.0092e-06 15.9663 2.04589e-06L15.9494 2.04736e-06C11.21 0.0486532 7.38534 1.06967 4.58191 3.03581C1.71295 5.04801 0.000135441 8.40685 0.000135757 12.0213L0.00013634 18.6877C0.0001364 19.3753 0.557448 19.9332 1.24582 19.9332C1.93419 19.9332 2.4915 19.3753 2.4915 18.6877L2.4915 12.0213C2.4915 9.2177 3.8079 6.62105 6.01249 5.07525C8.22163 3.52621 11.2619 2.66542 15.0606 2.51362L15.0606 2.94954C12.0806 3.69551 5.11457 5.98469 5.11457 11.045L5.11457 13.8629C5.11457 15.1888 6.19416 16.2682 7.52094 16.2682L15.0606 16.2682L15.0606 27.5091L2.4915 27.5091L2.4915 24.5005C2.4915 23.8123 1.93419 23.2551 1.24582 23.2551C0.557449 23.2551 0.000136788 23.8123 0.000136848 24.5005L0.000137119 27.5947C0.000137235 28.9213 1.07908 30 2.40586 30Z" fill="#F56A5D"></path>
                </svg>
                <div className='opacity-80 text-justify italic tracking-wide'>

                  “The final design met the required specs and functioned exactly as intended. Artist Solution worked effectively to complete the task.”
                </div>
                <div className='text-blue-500 mt-6 text-normal font-semibold  tracking-wider'>
                  COOK-<span className='text-gray-500 italic'>CEO AT ABC</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex justify-around gap-6'>

              <div className='flex-1  my-10 p-6 rounded-xl'>
                <svg className=" mb-8" xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <path d="M38.6667 5.23417C39.4518 5.05903 40 4.37338 40 3.56708L40 1.58537C40 1.15919 39.8326 0.758953 39.529 0.459265C39.2292 0.162821 38.8341 2.00925e-06 38.415 2.04589e-06L38.3975 2.04742e-06C33.6581 0.0486532 29.8341 1.07032 27.0306 3.03581C24.161 5.04801 22.4482 8.40685 22.4482 12.0213L22.4482 27.5947C22.4482 28.9206 23.5278 30 24.8539 30L37.5936 30C38.9204 30 40 28.9206 40 27.5947L40 16.1832C40 14.8566 38.9204 13.7772 37.5936 13.7772L30.0547 13.7772L30.0547 11.0457C30.0547 7.27426 37.7857 5.43202 38.6667 5.23417ZM29.969 16.2682L37.5086 16.2682L37.5086 27.5091L24.9396 27.5091L24.9396 12.0219C24.9396 9.21835 26.256 6.62169 28.4606 5.07525C30.6697 3.52621 33.7106 2.66606 37.5086 2.51362L37.5086 2.94954C34.5287 3.69616 27.5633 5.98534 27.5633 11.0457L27.5633 13.8629C27.5633 15.1894 28.6422 16.2682 29.969 16.2682Z" fill="#5C9EFF"></path>
                  <path d="M2.40586 30L15.1455 30C16.4723 30 17.5513 28.9206 17.5513 27.5947L17.5513 16.1832C17.5513 14.8566 16.4723 13.7772 15.1455 13.7772L7.60593 13.7772L7.60593 11.0457C7.60593 7.27426 15.3369 5.43202 16.2186 5.23417C17.0037 5.05838 17.5513 4.37273 17.5513 3.56708L17.5513 1.58537C17.5513 1.15919 17.3845 0.758953 17.0809 0.458616C16.7812 0.16217 16.386 2.0092e-06 15.9663 2.04589e-06L15.9494 2.04736e-06C11.21 0.0486532 7.38534 1.06967 4.58191 3.03581C1.71295 5.04801 0.000135441 8.40685 0.000135757 12.0213L0.00013634 18.6877C0.0001364 19.3753 0.557448 19.9332 1.24582 19.9332C1.93419 19.9332 2.4915 19.3753 2.4915 18.6877L2.4915 12.0213C2.4915 9.2177 3.8079 6.62105 6.01249 5.07525C8.22163 3.52621 11.2619 2.66542 15.0606 2.51362L15.0606 2.94954C12.0806 3.69551 5.11457 5.98469 5.11457 11.045L5.11457 13.8629C5.11457 15.1888 6.19416 16.2682 7.52094 16.2682L15.0606 16.2682L15.0606 27.5091L2.4915 27.5091L2.4915 24.5005C2.4915 23.8123 1.93419 23.2551 1.24582 23.2551C0.557449 23.2551 0.000136788 23.8123 0.000136848 24.5005L0.000137119 27.5947C0.000137235 28.9213 1.07908 30 2.40586 30Z" fill="#5C9EFF"></path>
                </svg>
                <div className='opacity-80  text-justify italic tracking-wide'>

                  “The final design met the required specs and functioned exactly as intended. Artist Solution worked effectively to complete the task.”
                </div>
                <div className='text-blue-500 mt-6 text-normal font-semibold  tracking-wider'>
                  COOK-<span className='text-gray-500 italic'>CEO AT ABC</span>
                </div>
              </div>
              <div className=' flex-1 my-10 p-6 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" className='mb-8' width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <path d="M38.6667 5.23417C39.4518 5.05903 40 4.37338 40 3.56708L40 1.58537C40 1.15919 39.8326 0.758953 39.529 0.459265C39.2292 0.162821 38.8341 2.00925e-06 38.415 2.04589e-06L38.3975 2.04742e-06C33.6581 0.0486532 29.8341 1.07032 27.0306 3.03581C24.161 5.04801 22.4482 8.40685 22.4482 12.0213L22.4482 27.5947C22.4482 28.9206 23.5278 30 24.8539 30L37.5936 30C38.9204 30 40 28.9206 40 27.5947L40 16.1832C40 14.8566 38.9204 13.7772 37.5936 13.7772L30.0547 13.7772L30.0547 11.0457C30.0547 7.27426 37.7857 5.43202 38.6667 5.23417ZM29.969 16.2682L37.5086 16.2682L37.5086 27.5091L24.9396 27.5091L24.9396 12.0219C24.9396 9.21835 26.256 6.62169 28.4606 5.07525C30.6697 3.52621 33.7106 2.66606 37.5086 2.51362L37.5086 2.94954C34.5287 3.69616 27.5633 5.98534 27.5633 11.0457L27.5633 13.8629C27.5633 15.1894 28.6422 16.2682 29.969 16.2682Z" fill="#F56A5D"></path>
                  <path d="M2.40586 30L15.1455 30C16.4723 30 17.5513 28.9206 17.5513 27.5947L17.5513 16.1832C17.5513 14.8566 16.4723 13.7772 15.1455 13.7772L7.60593 13.7772L7.60593 11.0457C7.60593 7.27426 15.3369 5.43202 16.2186 5.23417C17.0037 5.05838 17.5513 4.37273 17.5513 3.56708L17.5513 1.58537C17.5513 1.15919 17.3845 0.758953 17.0809 0.458616C16.7812 0.16217 16.386 2.0092e-06 15.9663 2.04589e-06L15.9494 2.04736e-06C11.21 0.0486532 7.38534 1.06967 4.58191 3.03581C1.71295 5.04801 0.000135441 8.40685 0.000135757 12.0213L0.00013634 18.6877C0.0001364 19.3753 0.557448 19.9332 1.24582 19.9332C1.93419 19.9332 2.4915 19.3753 2.4915 18.6877L2.4915 12.0213C2.4915 9.2177 3.8079 6.62105 6.01249 5.07525C8.22163 3.52621 11.2619 2.66542 15.0606 2.51362L15.0606 2.94954C12.0806 3.69551 5.11457 5.98469 5.11457 11.045L5.11457 13.8629C5.11457 15.1888 6.19416 16.2682 7.52094 16.2682L15.0606 16.2682L15.0606 27.5091L2.4915 27.5091L2.4915 24.5005C2.4915 23.8123 1.93419 23.2551 1.24582 23.2551C0.557449 23.2551 0.000136788 23.8123 0.000136848 24.5005L0.000137119 27.5947C0.000137235 28.9213 1.07908 30 2.40586 30Z" fill="#F56A5D"></path>
                </svg>
                <div className='opacity-80 text-justify italic tracking-wide'>

                  “The team is great and really good for long term collaboration. I recommend Artist Solution for
                  eCommerce services.”
                </div>
                <div className='text-blue-500 mt-6 text-normal font-semibold  tracking-wider'>
                  COOK-<span className='text-gray-500 italic'>CEO AT ABC</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex justify-around gap-6'>

              <div className='flex-1  my-10 p-6 rounded-xl'>
                <svg className=" mb-8" xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <path d="M38.6667 5.23417C39.4518 5.05903 40 4.37338 40 3.56708L40 1.58537C40 1.15919 39.8326 0.758953 39.529 0.459265C39.2292 0.162821 38.8341 2.00925e-06 38.415 2.04589e-06L38.3975 2.04742e-06C33.6581 0.0486532 29.8341 1.07032 27.0306 3.03581C24.161 5.04801 22.4482 8.40685 22.4482 12.0213L22.4482 27.5947C22.4482 28.9206 23.5278 30 24.8539 30L37.5936 30C38.9204 30 40 28.9206 40 27.5947L40 16.1832C40 14.8566 38.9204 13.7772 37.5936 13.7772L30.0547 13.7772L30.0547 11.0457C30.0547 7.27426 37.7857 5.43202 38.6667 5.23417ZM29.969 16.2682L37.5086 16.2682L37.5086 27.5091L24.9396 27.5091L24.9396 12.0219C24.9396 9.21835 26.256 6.62169 28.4606 5.07525C30.6697 3.52621 33.7106 2.66606 37.5086 2.51362L37.5086 2.94954C34.5287 3.69616 27.5633 5.98534 27.5633 11.0457L27.5633 13.8629C27.5633 15.1894 28.6422 16.2682 29.969 16.2682Z" fill="#5C9EFF"></path>
                  <path d="M2.40586 30L15.1455 30C16.4723 30 17.5513 28.9206 17.5513 27.5947L17.5513 16.1832C17.5513 14.8566 16.4723 13.7772 15.1455 13.7772L7.60593 13.7772L7.60593 11.0457C7.60593 7.27426 15.3369 5.43202 16.2186 5.23417C17.0037 5.05838 17.5513 4.37273 17.5513 3.56708L17.5513 1.58537C17.5513 1.15919 17.3845 0.758953 17.0809 0.458616C16.7812 0.16217 16.386 2.0092e-06 15.9663 2.04589e-06L15.9494 2.04736e-06C11.21 0.0486532 7.38534 1.06967 4.58191 3.03581C1.71295 5.04801 0.000135441 8.40685 0.000135757 12.0213L0.00013634 18.6877C0.0001364 19.3753 0.557448 19.9332 1.24582 19.9332C1.93419 19.9332 2.4915 19.3753 2.4915 18.6877L2.4915 12.0213C2.4915 9.2177 3.8079 6.62105 6.01249 5.07525C8.22163 3.52621 11.2619 2.66542 15.0606 2.51362L15.0606 2.94954C12.0806 3.69551 5.11457 5.98469 5.11457 11.045L5.11457 13.8629C5.11457 15.1888 6.19416 16.2682 7.52094 16.2682L15.0606 16.2682L15.0606 27.5091L2.4915 27.5091L2.4915 24.5005C2.4915 23.8123 1.93419 23.2551 1.24582 23.2551C0.557449 23.2551 0.000136788 23.8123 0.000136848 24.5005L0.000137119 27.5947C0.000137235 28.9213 1.07908 30 2.40586 30Z" fill="#5C9EFF"></path>
                </svg>
                <div className='opacity-80 italic text-justify tracking-wide'>

                  “The team is great and really good for long term collaboration. I recommend Artist Solution for
                  eCommerce services.”
                </div>
                <div className='text-blue-500 mt-6 text-normal font-semibold  tracking-wider'>
                  COOK-<span className='text-gray-500 italic'>CEO AT ABC</span>
                </div>
              </div>
              <div className='flex-1  my-10 p-6 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" className='mb-8' width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <path d="M38.6667 5.23417C39.4518 5.05903 40 4.37338 40 3.56708L40 1.58537C40 1.15919 39.8326 0.758953 39.529 0.459265C39.2292 0.162821 38.8341 2.00925e-06 38.415 2.04589e-06L38.3975 2.04742e-06C33.6581 0.0486532 29.8341 1.07032 27.0306 3.03581C24.161 5.04801 22.4482 8.40685 22.4482 12.0213L22.4482 27.5947C22.4482 28.9206 23.5278 30 24.8539 30L37.5936 30C38.9204 30 40 28.9206 40 27.5947L40 16.1832C40 14.8566 38.9204 13.7772 37.5936 13.7772L30.0547 13.7772L30.0547 11.0457C30.0547 7.27426 37.7857 5.43202 38.6667 5.23417ZM29.969 16.2682L37.5086 16.2682L37.5086 27.5091L24.9396 27.5091L24.9396 12.0219C24.9396 9.21835 26.256 6.62169 28.4606 5.07525C30.6697 3.52621 33.7106 2.66606 37.5086 2.51362L37.5086 2.94954C34.5287 3.69616 27.5633 5.98534 27.5633 11.0457L27.5633 13.8629C27.5633 15.1894 28.6422 16.2682 29.969 16.2682Z" fill="#F56A5D"></path>
                  <path d="M2.40586 30L15.1455 30C16.4723 30 17.5513 28.9206 17.5513 27.5947L17.5513 16.1832C17.5513 14.8566 16.4723 13.7772 15.1455 13.7772L7.60593 13.7772L7.60593 11.0457C7.60593 7.27426 15.3369 5.43202 16.2186 5.23417C17.0037 5.05838 17.5513 4.37273 17.5513 3.56708L17.5513 1.58537C17.5513 1.15919 17.3845 0.758953 17.0809 0.458616C16.7812 0.16217 16.386 2.0092e-06 15.9663 2.04589e-06L15.9494 2.04736e-06C11.21 0.0486532 7.38534 1.06967 4.58191 3.03581C1.71295 5.04801 0.000135441 8.40685 0.000135757 12.0213L0.00013634 18.6877C0.0001364 19.3753 0.557448 19.9332 1.24582 19.9332C1.93419 19.9332 2.4915 19.3753 2.4915 18.6877L2.4915 12.0213C2.4915 9.2177 3.8079 6.62105 6.01249 5.07525C8.22163 3.52621 11.2619 2.66542 15.0606 2.51362L15.0606 2.94954C12.0806 3.69551 5.11457 5.98469 5.11457 11.045L5.11457 13.8629C5.11457 15.1888 6.19416 16.2682 7.52094 16.2682L15.0606 16.2682L15.0606 27.5091L2.4915 27.5091L2.4915 24.5005C2.4915 23.8123 1.93419 23.2551 1.24582 23.2551C0.557449 23.2551 0.000136788 23.8123 0.000136848 24.5005L0.000137119 27.5947C0.000137235 28.9213 1.07908 30 2.40586 30Z" fill="#F56A5D"></path>
                </svg>
                <div className='opacity-80 text-justify italic tracking-wide'>

                  “Artist Solution provided excellent development knowledge to deliver a functional
                  platform and they hit all deadlines. Their team is flexible and reliable.”
                </div>
                <div className='text-blue-500 mt-6 text-normal font-semibold  tracking-wider'>
                  COOK-<span className='text-gray-500 italic'>CEO AT ABC</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}