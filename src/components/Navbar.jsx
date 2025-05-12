import React from 'react'
import { links } from '../data'
const Navbar = () => {
  return (
    <nav className='bg-emerald-300'>
      <div className='mx-auto max-w-7xl px-8 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-2xl font-bold'>
          Web <span className='text-emerald-500'>Dev</span>
        </h2>

        <div className='flex gap-x3'>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className=' capitalize hover:text-emerald-500 text-lg  tracking-wider  duration-300 px-3'
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
