'use client'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Analysis = () => {

    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <ScrollTrigger onEnter={() => setTrigger(true)} onExit={() => setTrigger(false)}>
            <div className='bg-[#f8f9fa]' >

                <div className='flex relative  mx-auto  justify-around items-center gap-4 flex-wrap' >
                    <div className='relative   mt-20 mb-40  text-white' >
                        <div className='h-[50px] w-[50px] absolute top-[13%] left-[110%] rounded-full bg-[#BCA37F]'></div>
                        <div className='h-[25px] w-[25px] absolute top-[1%] left-[120%] rounded-full bg-[#D6CC99]'></div>
                        <div className='h-[15px] w-[15px] absolute top-[10%] left-[135%] rounded-full bg-[#D0E7D2]'></div>
                        <div className='h-[10px] w-[10px] absolute top-[0%] left-[140%] rounded-full bg-[#D0E7D2]'></div>
                        <div className='h-[50px] w-[50px] absolute top-[110%] left-[10%] rounded-full bg-[#113946]'></div>
                        <div className='h-[25px] w-[25px] absolute top-[132%] left-[10%] rounded-full bg-[#D6CC99]'></div>
                        <div className='h-[15px] w-[15px] absolute top-[124%] left-[1%] rounded-full bg-[#D0E7D2]'></div>
                        <div className='h-[10px] w-[10px] absolute top-[140%] left-[%] rounded-full bg-[#D0E7D2]'></div>
                        <div className='h-[24px] w-[24px] absolute top-[120%] left-[110%] rounded-full bg-[#EAD7BB]'></div>
                        <div className='h-[10px] w-[10px] absolute top-[130%] left-[125%] rounded-full bg-[#D0E7D2]'></div>
                        <div className=' flex  justify-center items-center h-[250px] w-[250px] rounded-full bg-[#113946]'>
                            <span className='text-center text-4xl font-bold'>{trigger && <CountUp start={0} end={20} duration={5} />}+<p className='text-xl'>clients</p></span>
                        </div>
                        <div className='h-[190px] flex  justify-center items-center text-center absolute w-[190px] top-[40%] left-[80%] rounded-full bg-[#BCA37F] ' >
                            <span className='text-center text-4xl font-bold'>{trigger && <CountUp start={0} end={20} duration={5} />}+<p className='text-xl '>projects</p></span>
                        </div>
                        <div className='h-[170px] text-center flex  justify-center items-center w-[170px] absolute top-[75%] left-[35%] rounded-full bg-[#EAD7BB]'>
                            <span className='text-center text-4xl font-bold'>{trigger && <CountUp start={0} end={10} duration={5} />}+<p className='text-xl'>team members</p></span>
                        </div>
                    </div>
                    <div className='w-5/12 -ml-10'>
                        <div className='text-3xl font-semibold' style={{ fontFamily: "josefin sans", color: "#2b3342" }}>A CUSTOM WEB APP, MOBILE APP, AND UI/UX DESIGNING AGENCY</div>
                        <p className='opacity-90 mt-4'>Expand your brand reach and maximize your ROI with Artist Solution,an expert web Design Company and digital agency, providing custom web app, mobile app, and ui/ux designing solution.</p>
                        <div className='mt-4'>
                            <div className='opacity-90 mb-2 flex justify-between'><span>Better Performance</span><span>95%</span></div>
                            <div className='h-[8px] p-[1px] w-full rounded-md border border-[#A511DC]'>
                                {trigger && <div className='w-[95%] h-[4px] rounded-md bg-[#A511DC] skillbar1'>
                                </div>}
                            </div>
                            <div className='opacity-90  mt-4 mb-2 flex justify-between'><span>Avarage Improvement</span><span>99%</span></div>
                            <div className='h-[8px] p-[1px] w-full rounded-md border border-[#004fd2]'>
                                {trigger && <div className='w-[99%] h-[4px] rounded-md bg-[#004fd2] skillbar2'>
                                </div>}
                            </div>
                            <div className='opacity-90  mt-4 mb-2 flex justify-between'><span>Customer Approval</span><span>90%</span></div>
                            <div className='h-[8px] p-[1px] w-full rounded-md border border-[#ff00ea]'>
                                {trigger && <div className='w-[90%] h-[4px] rounded-md bg-[#ff00ea] skillbar3'>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Analysis