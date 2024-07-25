import Form from '@/components/ux/form'
import Image from 'next/image'
import ModeToggle from '@/components/mode-toggle'

export default function Contact() {
  return (
    <section id='contact' className='space-y-5'>
      <div className='space-y-2'>
        <h1 className='text-lg font-semibold text-left md:text-center sm:text-xl md:text-3xl lg:text-4xl'>
          Contact our team
        </h1>
        <p className='text-sm text-muted-foreground text-left md:text-center md:text-base max-w-2xl mx-auto'>
          Got any questions about the product or scaling on our platform? We&apos;re here to help. Chat to our friendly
          team 24/7 and get onboard in less than 5 minutes.
        </p>
      </div>
      <div className='flex md:justify-center lg:border-2 lg:p-2 lg:space-x-2 rounded-md'>
        <Form />
        <div className='relative hidden lg:block p-2 flex-1'>
          <Image
            src={'/steel.jfif'}
            alt='steel'
            fill={true}
            priority
            placeholder='blur'
            blurDataURL={'/steel.jfif'}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              objectFit: 'cover',
              borderRadius: '0.25rem',
              width: '100%',
            }}
          />
        </div>
      </div>
      <span className='text-start leading-none tracking-tight text-sm text-muted-foreground space-x-2 p-2 flex items-center justify-center w-full'>
        <p> &copy;nothing 2024 </p>
        <ModeToggle />
      </span>
    </section>
  )
}
