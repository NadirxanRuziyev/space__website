import React, { useEffect, useState } from 'react'
import Bgvideo from './assets/earth-bg.mp4'
import { Banner1, Banner2, Footer, Hero, HeroCard, Modal, Navbar } from './Components'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(()=>{
    Aos.init({
      duration:1200,
      easing:'ease-in-out'
    })
  }, [])

  const [openModal , setOpenModal ] = useState(false)
  const [num, setNum ] = useState('1')

  return (
    <div className="">
      <div className="h-[750px] relative">
        <video autoPlay loop muted className='fixed right-0 top-0 h-[750px] w-full object-cover z-[-1]'>
          <source src={Bgvideo} type='video/mp4'/>
        </video>
        <div className={ !openModal ? `hidden`:`block`}>
          <Modal closeM={setOpenModal} num={num}/>
        </div>
        <Navbar/>
        <Hero openM={setOpenModal}/>
        <HeroCard/>
        <Banner1 openM={setOpenModal} num={setNum}/>
        <Banner2 openM={setOpenModal} num={setNum}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App