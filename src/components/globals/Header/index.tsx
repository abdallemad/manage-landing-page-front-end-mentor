import React from 'react'
import Image from 'next/image'
import Menu from './menu'
import Link from 'next/link'
import { motion } from 'motion/react';
import { anime } from '@/lib/utils';
function Header() {
  return (
    <motion.header 
    {...anime({
      initial: { opacity: 0, y: -100 },
      enter: { opacity: 1, y: 0 },
    })}
    transition={{ delay:0.5 }}
    className='container z-50 flex items-center justify-between py-8'>
      <Link href={'#'}>
        <Image
          src="/images/logo.svg"
          alt="Manage Logo"
          width={100}
          height={100}
          className='w-32'
        />
      </Link>
      <Menu orientation="desktop" />
      <Menu orientation="mobile" />
    </motion.header>
  )
}

export default Header
