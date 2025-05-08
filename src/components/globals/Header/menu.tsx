'use client';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants';
import { anime } from '@/lib/utils';
import { Menu as MenuIcon, X } from 'lucide-react';
import {
  AnimatePresence,
  motion
} from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

function Menu({ orientation }: { orientation: "desktop" | "mobile" }) {
  switch (orientation) {
    case "desktop":
      return (
        <>
          <ul className=' items-center gap-6 hidden md:flex'>
            {NAV_LINKS.map((link) => (
              <li key={link} className='cursor-pointer hover:opacity-50 transition-all'>
                <Link href={'#'}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <Button className='hidden md:inline-flex'>Get Started</Button>
        </>
      )
    case 'mobile':
      return (
        <MobileMenu />
      )
  }
}
function MobileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        size={'icon'}
        variant={'link'}
        className='md:hidden z-[9999]'
        onClick={() => setOpen(!open)}
      >
        {open ? <X className='size-8' /> : <MenuIcon className='size-8' />}
      </Button>
      <AnimatePresence mode='wait'>
        {
          open && (
            <>
              <motion.div
                {...anime({
                  initial: { opacity: 0 },
                  enter: { opacity: 1 },
                  exit: { opacity: 0 }
                })}
                className='fixed inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black' />
              <motion.ul
                {...anime({
                  initial: { opacity: 0, y: 100 },
                  enter: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 100 }
                })}
                className='fixed text-center md:hidden inset-x-4 top-24 flex flex-col bg-white border space-y-2 rounded-md p-8 z-20'>
                {NAV_LINKS.map((link) => (
                  <li key={link} className='cursor-pointer py-2 px-4 text-xl font-semibold w-full hover:opacity-50 transition-all'>
                    <Link href={'#'}>
                      {link}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </>
          )
        }
      </AnimatePresence>
    </>
  )
}



export default Menu
