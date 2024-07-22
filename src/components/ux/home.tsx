import Navbar from '@/components/ux/navbar'
import Link from 'next/link'
import { Component } from '@/components/ux/chart'

export default function Home() {
  return (
    <header className='p-5'>
      <Navbar />
      <main className='mb-10'>
        <div className='max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
          <h1 className='font-extrabold text-4xl lg:text-6xl tracking-tight text-center bg-clip-text bg-gradient-to-b from-primary to-foreground text-transparent py-2'>
            Building the Future from Nothing
          </h1>
          <h4 className='mt-5 text-lg text-center max-w-3xl mx-auto'>
            Transforming Visions into Reality through innovations and Expertise
          </h4>
        </div>
        <div className='mt-7 space-x-5 flex items-center justify-center'>
          <Link
            href={'/#services'}
            className='bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 p-5 rounded-md flex items-center justify-center font-semibold'
          >
            Get started
          </Link>
          <Link
            href={'/#about'}
            className='border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 p-5 rounded-md flex items-center justify-center'
          >
            Learn More
          </Link>
        </div>
      </main>
      <Component />
    </header>
  )
}
