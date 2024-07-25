import Home from '@/components/ux/home'
import About from '@/components/ux/about'
import Services from '@/components/ux/services'
import Contact from '@/components/ux/contact'

export default function Page() {
  return (
    <div className='space-y-10'>
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  )
}
