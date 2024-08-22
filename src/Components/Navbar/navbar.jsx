import React from 'react'
import Logo from '../../assets/logo.png'

function Navbar() {

    const note = ()=> alert('Bu qismga hali O\'zgartirish mavjud 😊🧠 ')
    

  return (
    <>
        <div data-aos="fade-down" className='fixed top-0 right-0 w-full z-50 backdrop-blur-sm bg-black/20 py-2 sm:py-2'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-white text-2xl font-bold cursor-pointer" >
                        <img src={Logo} alt="logo" className='w-10' />
                        <span><a href="#">TCJ-SPACE</a></span>
                    </div>
                    <div className="text-white hidden sm:block">
                        <ul className='flex items-center gap-8 text-xl py-4'>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#technology">Technology</a>
                            </li>
                            <li>
                                <a href="#galaxy">Galaxy</a>
                            </li>
                            <li>
                                <a href="#satelite">Satelite</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={note} className='text-white border-white border-2 px-3 py-1 rounded-md font-bold'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar