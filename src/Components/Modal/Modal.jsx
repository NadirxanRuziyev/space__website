import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import satelite1 from '../../assets/satelite1.jpg'
import satelite2 from '../../assets/satelite2.jpg'

function Modal({closeM, num}) {
  return (
    <div  className='bg-black/65 inset-0 fixed top-0 right-0 z-[100] flex items-center justify-center'>
        <div className=" relative w-full sm:w-[500px] h-[250px] bg-white rounded-md">
            <div><IoIosCloseCircle onClick={()=>closeM(false)} className='absolute top-3 right-3 text-3xl text-white flex text-end  justify-end z-30 cursor-pointer'/>
            </div>
            <img src={num ==='1'? satelite1:satelite2} alt="" className='absolute z-[0] h-[250px] top-0 right-0 w-full  blur-sm object-cover'/>
            <div className="relative flex flex-col p-5 space-y-4 text-white items-center z-20">
                <h1 className='text-2xl font-bold'>TCJ-SPACE</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur asperiores obcaecati officia blanditiis excepturi sapiente cumque tempore tenetur sit, numquam necessitatibus veniam iure vel temporibus ea. Tempora eum possimus corrupti dignissimos quam sed excepturi voluptate, consequatur officiis ut? Repellendus beatae et quidem porro dicta quos omnis aliquam fugit veniam! Minima!</p>
            </div>
        </div>
    </div>
  )
}

export default Modal