"use client"

import Image from 'next/image'
import '@/style/style.css'
import Link from 'next/link'
import React, { useRef,useState,useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname()
    console.log(pathname)

    const [handleScroll, sethandleScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                sethandleScroll(true)
            }
            else{
                sethandleScroll(false)
            }
        })
    }, [])

    // bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3]
  return (
    <div className={` fixed top-0 left-0 z-10 w-full   ${handleScroll===true ?'bg-white shadow-md'  :'bg-gradient-to-r  from-[#F5F5F5] to-[#DFD7BF]'}` } >
    <div className={` flex items-center  justify-around ${handleScroll===true ? ' navTrans h-16':'h-20'} }`}>
        <h1 className='text-3xl align-middle font-medium tracking-wide text-[#2b3342]' style={{color:""}}>ARTIST SOLUTION</h1>
        <ul className='list-none flex  items-center gap-6 text-lg  cursor-pointer font-medium opacity-80  text-[#343f52] tracking-wide ' style={{lineHeight: "1"}}>
            <li className={`hover:text-[#e7b900] ${pathname==='/'&&'text-[#e7b900]'}`}><Link href="/">Home</Link></li>
            <li className={`hover:text-[#e7b900] ${pathname==='/about'&&'text-[#e7b900]'}`}><Link href="/about">About Us</Link></li>
            <li className={`hover:text-[#e7b900] ${pathname==='/services'&&'text-[#e7b900]'}`}><Link href="">Services</Link></li>
            <li className={`hover:text-[#e7b900] ${pathname==='/services'&&'text-[#e7b900]'}`}><Link href="">Career</Link></li>
            <li className=' ml-6 relative text-blue-500 opacity-80' style={{color:""}} ><Link href="/contact" className='ml-4  font-medium bubble2'>  Contact Us   <span className='ml-2 text-xl'>&rarr;</span></Link></li>
        </ul>
        
    </div>
     

    </div>
  )
}

export default Navbar
