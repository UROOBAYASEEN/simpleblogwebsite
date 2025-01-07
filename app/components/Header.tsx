
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const blogcategories=["home","about","contact","blogs"]


  return (
    <div className='flex justify-between px-5 pt-4 fixed top-0 left-0 right-0'>
        <div className='text-2xl font-bold'><span className='text-4xl text-red-800 font-bold'>M</span>y <span  className='text-4xl text-red-800 font-bold'>B</span>logs</div>
        <div className='flex justify-between gap-5'>
            {blogcategories.map((val,ind)=><div key={ind}>
               <Link href={val=="home"?`/`:`/${val}`}> <p className='uppercase text-[6px] md:text-2xl lg:text-1xl tracking-tighter font-bold'>{val}</p></Link>
            </div>)}
        </div>
    </div>
  )
} 

export default Header