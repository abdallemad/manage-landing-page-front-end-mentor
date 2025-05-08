import React from 'react'
import { FEATURES } from '@/constants'
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const ulVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: .3,
    },
  },
};

const liVariants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
const titleVariants = {
  initial: { opacity: 0, x: -300 },
  enter: { opacity: 1, x: 0 },
}

function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const isUlInView = useInView(ulRef, {
    once: true,
    amount: 0.5
  })
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5
  })
  return (
    <section className='container relative'>
      <div className="py-22 flex max-md:flex-col items-start gap-24 relative">
        <motion.div
          ref={ref}
          variants={titleVariants}
          animate={isInView ? "enter" : "initial"}
          className='space-y-4 max-md:text-center'>
          <h2 className='h2 whitespace-nowrap'>
            What&apos;s different about <br /> Manage?
          </h2>
          <p className='description md:max-w-xs text-pretty'>
            Manage provides all the functionality your
            team needs, without the complexity. Our
            software is tailored-made for modern digital
            product teams.
          </p>
        </motion.div>
        <motion.ul
          initial="hidden"
          ref={ulRef}
          variants={ulVariants}
          animate={isUlInView ? "show" : "hidden"}
          className='space-y-8'>
          {
            FEATURES.map((feature) => (
              <SingleFeature key={feature.title} feature={feature} />
            ))
          }
        </motion.ul>
      </div>

      <Image
        src='/images/bg-tablet-pattern.svg'
        alt='A charts pre view images for the application'
        width={600}
        height={550}
        className='absolute -bottom-[50%] -left-[50%] -z-10'
      />
    </section>
  )
}

function SingleFeature({ feature }: { feature: typeof FEATURES[number] }) {
  return (
    <motion.li variants={liVariants} className='flex items-start gap-8'>
      <span className='bg-primary text-primary-foreground rounded-ful px-4 py-2 rounded-full flex justify-center items-center'>0{feature.features_number}</span>
      <div>
        <h3 className='h3 mb-6'>{feature.title}</h3>
        <p className='description-sm'>{feature.description}</p>
      </div>
    </motion.li>
  )
}

export default Features
