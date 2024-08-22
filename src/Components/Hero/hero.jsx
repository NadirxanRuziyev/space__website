import React from 'react'
import Mountaine from '../../assets/moon-surface-hd.png'

function Hero({openM}) {
  return (
    <div className='bg-black/20 relative h-full' id='about'>
        <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='text-white space-y-4 lg:pr-36'>
                    <h1 data-aos="fade-up" className='text-5xl font-bold'>
                        ORBIT THE EARTH
                    </h1>
                    <p data-aos="fade-up" data-aos-delay='300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
                        dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
                        tempora similique dignissimos repellat aperiam veniam culpa
                        consequatur repudiandae asperiores saepe.
                    </p>
                    <button data-aos='fade-up' data-aos-delay='500' onClick={()=>openM(true)} className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200'>Learm more</button>
                </div>
                <div></div>
            </div>
        </div>
        <img src={Mountaine} alt="" className='absolute bottom-0 right-0 brightness-50 z-10'/>
        <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  )
}

export default Hero