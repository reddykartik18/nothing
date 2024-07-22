'use client'
import { useState } from 'react'
import Sidebar from '@/components/ux/sidebar'
import { Bars3Icon, CubeTransparentIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  const array = ['home', 'about', 'services', 'contact']
  return (
    <nav className='flex items-center justify-between'>
      <CubeTransparentIcon className='w-8 h-8 ' />
      <ul className='md:flex items-center justify-center space-x-5 hidden'>
        {array.map((item, index) => (
          <li key={index} className='text-primary hover:text-foreground capitalize'>
            <Link href={item === 'home' ? '/' : `/#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setOpen(true)}
        className='border border-input md:hidden hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md'
      >
        <Bars3Icon className='icon' />
      </button>
      <Sidebar open={open} onClose={() => setOpen(false)} data={array} />
    </nav>
  )
}
