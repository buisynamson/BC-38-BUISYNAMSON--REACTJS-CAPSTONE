import React from 'react'

export default function PageNotFound() {
  return (
    <div className='relative'>
         <h1 className='uppercase absolute bottom-[70%] left-[50%] translate-x-[-50%] translate-y-[-80%] text-[12px] md:text-[40px] font-bold'>404 error</h1>
        <img className='mx-auto h-[100vh] object-cover' src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif' alt='404 error'/>
        <h2 className='absolute bottom-[20%] left-[50%] translate-x-[-50%] translate-y-[30%] text-[12px] md:text-[30px] font-bold text-amber-400'> OOPS! Page Not Found</h2>
    </div>
  )
}
