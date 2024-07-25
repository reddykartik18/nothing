'use client'
import { ComputerDesktopIcon, SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <ul className='border rounded-2xl px-1 py-2 flex items-center justify-center max-w-fit'>
      <li className='flex items-center justify-center'>
        <input
          id='sun'
          name='mode'
          type='radio'
          className='appearance-none peer'
          checked={theme === 'light'}
          onChange={() => setTheme('light')}
        />
        <label
          htmlFor='sun'
          className='peer-checked:bg-foreground peer-checked:text-background  p-2 rounded-full cursor-pointer'
        >
          <SunIcon className='icon' />
        </label>
      </li>
      <li className='flex items-center justify-center'>
        <input
          id='system'
          name='mode'
          type='radio'
          className='appearance-none peer'
          checked={theme === 'system'}
          onChange={() => setTheme('system')}
        />
        <label
          htmlFor='system'
          className='peer-checked:bg-foreground peer-checked:text-background p-2 rounded-full cursor-pointer'
        >
          <ComputerDesktopIcon className='icon' />
        </label>
      </li>
      <li className='flex items-center justify-center'>
        <input
          id='moon'
          name='mode'
          type='radio'
          className='appearance-none peer'
          checked={theme === 'dark'}
          onChange={() => setTheme('dark')}
        />
        <label
          htmlFor='moon'
          className='peer-checked:bg-foreground peer-checked:text-background p-2 rounded-full cursor-pointer'
        >
          <MoonIcon className='icon' />
        </label>
      </li>
    </ul>
  )
}
