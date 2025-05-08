import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { motion } from 'motion/react'
import { anime } from '@/lib/utils'

function Hero() {
  return (
    <section className='container'>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 py-12">
        <motion.div
          {...anime({
            initial: { opacity: 0, x: -100 },
            enter: { opacity: 1, x: 0 },
          })}
          className='space-y-10 max-w-[26rem] text-center md:text-start'>
          <h1 className='h1'>
            Bring everyone together to build better products.
          </h1>
          <p className='description'>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button className='px-8'>Get Started</Button>
        </motion.div>
        <motion.div
          {...anime({
            initial: { opacity: 0, x: 100 },
            enter: { opacity: 1, x: 0 },
          })}
          className='relative min-h-96'>
          <Image
            src='/images/illustration-intro.svg'
            alt='A charts pre view images for the application'
            width={550}
            height={550}
            className=''
          />
        </motion.div>
      </div>
      <Image
        src='/images/bg-tablet-pattern.svg'
        alt='A charts pre view images for the application'
        width={750}
        height={550}
        className='absolute -top-24 -right-12 -z-10'
      />
    </section>
  )
}

export default Hero
