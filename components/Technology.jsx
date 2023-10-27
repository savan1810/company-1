'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technology = () => {
    const list1 = useRef()
    const list2 = useRef()
    const list3 = useRef()
    const list4 = useRef()
    const list5 = useRef()

    const li1=useRef()
    const li2=useRef()
    const li3=useRef()
    const li4=useRef()
    const li5=useRef()

    useEffect(() => {
        AOS.init();
      }, [])


    const handlelist1 = (event) => {
        li2.current.style.color = "black";
        li2.current.style.borderBottom = "0px solid orange";
        li1.current.style.color = "orange";
        li1.current.style.borderBottom = "1px solid orange";
        li3.current.style.color = "black";
        li3.current.style.borderBottom = "0px solid orange";
        li4.current.style.color = "black";
        li4.current.style.borderBottom = "0px solid orange";
        li5.current.style.color = "black";
        li5.current.style.borderBottom = "0px solid orange";
        list2.current.style.display = "none"
        list1.current.style.display = "block"
        list3.current.style.display = "none"
        list4.current.style.display = "none"
        list5.current.style.display = "none"
    }
    const handlelist2 = (event) => {
        event.preventDefault()

        li1.current.style.color = "black";
        li1.current.style.borderBottom = "0px solid orange";
        li2.current.style.color = "orange";
        li2.current.style.borderBottom = "1px solid orange";
        li3.current.style.color = "black";
        li3.current.style.borderBottom = "0px solid orange";
        li4.current.style.color = "black";
        li4.current.style.borderBottom = "0px solid orange";
        li5.current.style.color = "black";
        li5.current.style.borderBottom = "0px solid orange";

        list2.current.style.display = "block"
        list1.current.style.display = "none"
        list3.current.style.display = "none"
        list4.current.style.display = "none"
        list5.current.style.display = "none"

    }
    const handlelist3 = (event) => {
        event.preventDefault()
        li1.current.style.color = "black";
        li1.current.style.borderBottom = "0px solid orange";
        li3.current.style.color = "orange";
        li3.current.style.borderBottom = "1px solid orange";
        li2.current.style.color = "black";
        li2.current.style.borderBottom = "0px solid orange";
        li4.current.style.color = "black";
        li4.current.style.borderBottom = "0px solid orange";
        li5.current.style.color = "black";
        li5.current.style.borderBottom = "0px solid orange";
        list3.current.style.display = "block"
        list1.current.style.display = "none"
        list2.current.style.display = "none"
        list4.current.style.display = "none"
        list5.current.style.display = "none"
    }
    const handlelist4 = (event) => {
        event.preventDefault()
        li1.current.style.color = "black";
        li1.current.style.borderBottom = "0px solid orange";
        li4.current.style.color = "orange";
        li4.current.style.borderBottom = "1px solid orange";
        li3.current.style.color = "black";
        li3.current.style.borderBottom = "0px solid orange";
        li2.current.style.color = "black";
        li2.current.style.borderBottom = "0px solid orange";
        li5.current.style.color = "black";
        li5.current.style.borderBottom = "0px solid orange";
        list4.current.style.display = "block"
        list1.current.style.display = "none"
        list2.current.style.display = "none"
        list3.current.style.display = "none"
        list5.current.style.display = "none"
    }
    const handlelist5 = (event) => {
        event.preventDefault()
        li1.current.style.color = "black";
        li1.current.style.borderBottom = "0px solid orange";
        li5.current.style.color = "orange";
        li5.current.style.borderBottom = "1px solid orange";
        li3.current.style.color = "black";
        li3.current.style.borderBottom = "0px solid orange";
        li4.current.style.color = "black";
        li4.current.style.borderBottom = "0px solid orange";
        li2.current.style.color = "black";
        li2.current.style.borderBottom = "0px solid orange";
        list5.current.style.display = "block"
        list1.current.style.display = "none"
        list2.current.style.display = "none"
        list3.current.style.display = "none"
        list4.current.style.display = "none"
    }


    return (
        <div className='mt-10'>
            <div className='  w-full  ' id='1'>
                <div className='w-4/5 mx-auto'>
                    <h2 className='   py-2  text-center font-semibold  text-3xl' style={{ fontFamily: "josefin sans", color: "#2b3342" }}><span className='text-orange-400'>TECHNOLGIES </span> WE WORK WITH</h2>
                    <div className='text-center opacity-90'>Our expert team of developers transforms your ideas into incredible apps and software by leveraging the latest technologies.</div>
                    <ul className='flex text-xl font-normal border-b pt-10  justify-center gap-12 '>
                        <li className='border-b py-2  ' style={{color:"orange",borderColor:"orange"}} ref={li1} onClick={handlelist1}><Link href='#1'>Mobile</Link></li>
                        <li className="py-2 "onClick={handlelist2} ref={li2}><Link href='#1' >Front End</Link></li>
                        <li className="py-2 " onClick={handlelist3} ref={li3}><Link href='#1'> Database</Link></li>
                        <li className="py-2 " onClick={handlelist4} ref={li4}><Link href='#1'>Back End</Link></li>
                        <li className="py-2 "  onClick={handlelist5} ref={li5}><Link href='#1'>Designing</Link></li>
                    </ul>
                    <div className='relative mb-20 mt-14 cursor-pointer' data-aos="fade-left"  data-aos-duration="2000">
                        <div className='relative transition ease-in-out delay-150 duration-300' ref={list1} >
                            <ul className='flex justify-center gap-10   mb-10 '>
                                <li className='bg-gray-100  bg-opacity-50 rounded-lg   h-36 w-36   '>
                                    <Image src='/flutter.png' className='mx-auto mt-6 box-content object-contain overflow-hidden' width={50} height={50} alt='' />
                                    <p className='text-center mt-4   opacity-90'>Flutter</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36 '>
                                    <Image src='/apple.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Apple</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36  '>
                                    <Image src='/Android.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Android</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36   '>
                                    <Image src='/atom.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>React Native</p>
                                </li>
                            </ul>
                        </div>
                        <div className='hidden mx-auto transition ease-in-out delay-150 duration-300' ref={list2} >
                            <ul className='flex justify-center gap-10   mb-10 ' >
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg   h-36 w-36   '>
                                    <Image src='/ReactJS.png' className='mx-auto mt-6 box-content object-contain overflow-hidden' width={61} height={50} alt='' />
                                    <p className='text-center mt-4   opacity-90'>ReactJS</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36 '>
                                    <Image src='/VueJS.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>VueJS</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36  '>
                                    <Image src='/Angular.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Angular</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36   '>
                                    <Image src='/JavaScript.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Java Script</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36   '>
                                    <Image src='/HTML5.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>HTML</p>
                                </li>
                            </ul>
                        </div>
                        <div className='hidden mx-auto transition ease-in-out delay-150 duration-300' ref={list3} >
                            <ul className='flex justify-center gap-10   mb-10 '>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg   h-36 w-36   '>
                                    <Image src='/MongoDB.png' className='mx-auto mt-6 box-content object-contain overflow-hidden' width={61} height={50} alt='' />
                                    <p className='text-center mt-4   opacity-90'>MongoDB</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36 '>
                                    <Image src='/ORACLE.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Oracle</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36  '>
                                    <Image src='/MySQL.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>MySQL</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36   '>
                                    <Image src='/PostgreSQL.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>PostgreSQL</p>
                                </li>
                            </ul>
                        </div>
                        <div className='hidden mx-auto transition ease-in-out delay-150 duration-300' ref={list4} >
                            <ul className='flex justify-center gap-10   mb-10 '>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg   h-36 w-36   '>
                                    <Image src='/NodeJS.png' className='mx-auto mt-6 box-content object-contain overflow-hidden' width={61} height={50} alt='' />
                                    <p className='text-center mt-4   opacity-90'>NodeJS</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36 '>
                                    <Image src='/PHP.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>PHP</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36  '>
                                    <Image src='/Laravel.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Laravel</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36   '>
                                    <Image src='/Codelgniter.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Codelgniter</p>
                                </li>
                            </ul>
                        </div>
                        <div className='hidden mx-auto transition ease-in-out delay-150 duration-300' ref={list5} >
                            <ul className='flex justify-center gap-10   mb-10 '>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg   h-36 w-36   '>
                                    <Image src='/Figma.png' className='mx-auto mt-6 box-content object-contain overflow-hidden' width={61} height={50} alt='' />
                                    <p className='text-center mt-4   opacity-90'>Figma</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36 '>
                                    <Image src='/Illustrator.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Illustrator</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36  '>
                                    <Image src='/XD.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>XD</p>
                                </li>
                                <li className='bg-gray-100 bg-opacity-50 rounded-lg  h-36 w-36   '>
                                    <Image src='/Photoshop.png' className='mx-auto mt-6' height={50} width={61} alt='' />
                                    <p className='text-center mt-4  opacity-90'>Photoshop</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Technology
