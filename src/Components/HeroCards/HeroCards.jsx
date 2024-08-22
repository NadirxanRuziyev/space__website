import React from 'react'
import wave from '../../assets/wave.gif'
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
    {
      title: "HST",
      content: "300-1500km",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
      icon: <FaReact className="text-7xl" />,
      aosDelay: "300",
    },
    {
      title: "ISS",
      content: "500-1500km",
      description:
        ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
      icon: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "GPS",
      content: "300-1500km",
      description:
        "Part of the Global Positioning System (GPS) used for navigation.",
      icon: <FaSpaceAwesome className="text-7xl" />,
      aosDelay: "700",
    },
  ];

function HeroCards() {
  return (
    <>
     <section className='bg-black' id='technology'>
        <div className="container">
            <div className="min-h-[400px]">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-20">
                        {
                            ServiceData.map((service , index)=>(
                                <div data-aos='fade-up' data-aos-delay={service.aosDelay} key={index} className='min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'>
                                    {service.icon}
                                    <h1>{service.title}</h1>
                                    <p>{service.content}</p>
                                    <p className='text-sm'>{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <img src={wave} alt="wave" className='w-full object-cover h-[200px] -translate-y-24 z-0' />
            </div>
        </div>
     </section>
    </>
  )
}

export default HeroCards