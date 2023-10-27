import MainPage from '@/components/MainPage'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import '../style/style.css'
import AboutUs from '@/components/AboutUs'
import Service from '@/components/Services'
import Footer from '@/components/Footer'
import ClientReview from '@/components/ClientReview'
import Technology from '@/components/Technology'
import Analysis from '@/components/Analysis'
import Served from '@/components/Served'
import Testenomial from '@/components/Testonomial'


export default function Home() {
  return (
    <main className="" style={{ fontFamily: "" }} >
      <div className='fixed -left-[300px] -bottom-[300px] w-[490px] h-[490px] na' style={{ background: "url(/footer-circle.png) no-repeat" }}></div>

      <MainPage />
      <AboutUs />
      <Service />

      <Technology />
      <Analysis />
      <div style={{
        height: "80vh",
        width: "100vw",
        backgroundImage: "url(/smart.jpg)",
        // position: "relative",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(14, 13, 13, 0.7)",
        backgroundBlendMode: "multiply",
        zIndex: "-1"
      }} >
        <Served />
      </div>

      <Testenomial />

      {/* <ClientReview/> */}

    </main>
  )
}
