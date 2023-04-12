import React from 'react'
import Image from 'next/image'
import Logo  from '../static/melbite.jpg'

const Header = () => {
  return (
    <div className='p-3 border-y border-purple-700 '>
        <div className='flex flex-1 justify-between items-center max-w-7xl mx-auto '>
            <div>
                <Image height={40} width={200} className='cursor-pointer object-contain' src={Logo}/>
            </div>
            <div className='flex gap-10 justify-between items-center'>
                <div className='cursor-pointer'>Our Story</div>
                <div className='cursor-pointer'>Start Writing</div>
                <div className='cursor-pointer px-8 py-2 rounded-full border border-purple-600 text-purple-500 font-semibold'>Login</div>
            </div>
        </div>
    </div>
  )
}

export default Header