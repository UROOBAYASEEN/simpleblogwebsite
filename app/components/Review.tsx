import React from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Offering = ({ image, blogname, blogpara }: { image: string; blogname: string; blogpara: string }) => {
    
  return (
    <div className=' py-7  px-7   text-white  bg-black  border-white'>
      <div className='bg-gray-500 py-6 w-14 rounded-full bg-cover bg-center bg-no-repeat object-cover' style={{backgroundImage:`url(${image})`}}>
        
      </div>
      <h2 className='text-2xl pt-3 tracking-tighter font-[500] '>{blogname}</h2>
      <p className='text-white tracking-tighter font-light'>{blogpara}</p>


<p className=' uppercase text-1xl mt-10 hover:border border-white cursor-pointer flex gap-1'>Learn More <span className='mt-2 ml-2'><FaArrowCircleRight/></span></p>  
    </div>
  )
}

export default Offering