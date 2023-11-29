import React from 'react'

export default function () {
  return (
    <header className='flex justify-between w-full text-slate-50 items-center p-2'>
    <h1 className='font-bold'><a href='#'>Isra</a></h1>      
        <nav className='w-1/2'>
            <ul className='flex justify-around items-center w-full  font-semibold '>
                <li className='hover:text-cyan-500 cursor-pointer ' >About Me</li>
                <li className='hover:text-cyan-500 cursor-pointer'>Projects</li>
                <li className='hover:text-cyan-500 cursor-pointer'>Contacts</li>
            </ul>
        </nav>
    </header>
  )
}
