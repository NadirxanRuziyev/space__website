import React from 'react'
import satelite1 from '../../assets/satelite1.jpg'

function Banner1({openM, num}) {

  return (
    <div className='bg-black text-white pb-12' id='galaxy'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center" >
          <div className="">
            <img data-aos='zoom-in' src={satelite1} alt="satelite1" className='w-full sm:w-[80%] h-[350px] object-cover mx-auto'/>
          </div>
          <div className="space-y-3  xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos='fade-up' className='text-sky-500 uppercase'> our mission</p>
            <h1 data-aos='fade-up' data-aos-delay='300' className='uppercase text-5xl'>Rapidscat</h1>
            <p data-aos='fade-up' data-aos-delay='500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt.
            </p>
            <button data-aos='fade-up' data-aos-delay='700' className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200'
            onClick={()=>{openM(true), num('1')}}>View All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner1