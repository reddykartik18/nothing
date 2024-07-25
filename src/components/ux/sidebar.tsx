import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface Props {
  open: boolean
  onClose: () => void
  data: string[]
}

export default function Sidebar({ open, onClose, data }: Props) {
  const [visible, setVisible] = useState(false)
  function handleClose() {
    setVisible(false)
    onClose()
  }
  useEffect(() => {
    open && setVisible(true)
  }, [open])
  return (
    <div
      className={`${open ? 'flex' : 'hidden'} md:hidden backdrop-blur bg-background/5
    justify-end z-10 fixed inset-0 min-w-screen min-h-screen`}
      onClick={handleClose}
    >
      <aside
        className={`w-[320px] ${visible ? 'mr-0' : '-mr-[320px]'} bg-background transition-all ease-linear duration-300 border border-l-input p-5 flex flex-col gap-y-5 relative`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className='border border-input hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md self-end'
        >
          <XMarkIcon className='icon' />
        </button>
        <ul className='space-y-2'>
          {data.map((item, index) => (
            <li key={index} className='text-primary hover:text-foreground capitalize'>
              <Link href={item === 'home' ? '/' : `/#${item}`} onClick={handleClose}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
