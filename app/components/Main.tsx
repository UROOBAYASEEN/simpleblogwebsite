
import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className='flex justify-center  px-6    w-screen  pt-[180px] '>
      <div className=''>
      
      <div>
      <p className='text-yellow-500 font-bold'>Enjoy our Blogs in Website</p>
        <p className='text-7xl font-bold tracking-tighter mt-5'>Story From World</p>
        <p className='max-w-3xl mx-auto mt-5 text-2xl font-light tracking-tighter'>Welcome to Our Website your hub for inspiration insights and fresh ideas. Explore diverse topics spark conversations and discover something new with every post. From thought-provoking articles to engaging stories we aim to inform inspire and connect with readers like you</p>
<div className='mt-10 mb-10'>
 <Link href={`/blogs`}> <button className='py-3 px-8  bg-yellow-500 font-bold mx-4 hover:bg-yellow-600 mt-4'>View Blogs</button></Link>
 <Link href={`https://www.linkedin.com/in/urooba-yaseen-48964a2b5/`}><button className='py-3 px-8  bg-yellow-500 font-bold mx-4 hover:bg-yellow-600 mt-4'>Contact US</button></Link>
</div>
      </div>
      </div>

    </div>
  )
}

export default Main