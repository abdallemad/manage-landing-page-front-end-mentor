import { REVIEWS } from '@/constants'
import { cn } from '@/lib/utils'
import { motion, useMotionValue } from 'motion/react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../ui/button'

const SPRING_ANIMATION = {
  type: "spring",
  stiffness: 100,
  damping: 10
}
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

function Reviews() {
  return (
    <section className='container'>
      <div className=" py-22 text-center">
        <h2 className="h2 text-center mb-8">What They&apos;ve said</h2>
        <ReviewsSlider />
        <Button className=''>Get Started</Button>
      </div>
    </section>
  )
}

function ReviewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setActiveIndex((pv) => {
          if (pv === REVIEWS.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const dragXValue = dragX.get()
    if (-20 < dragXValue && dragXValue < 20) {
      return
    }
    else if (dragXValue > 0) {
      setActiveIndex((prev) => Math.min(prev + 1, REVIEWS.length - 1))
    } else {
      setActiveIndex((prev) => Math.max(prev - 1, 0))
    }
  }
  return (
    <div className='py-8 flex items-center justify-center flex-col'>
      <motion.ul
        drag='x'
        style={{ x: dragX }}
        onDragEnd={onDragEnd}
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: `calc(-${activeIndex}00% - 1rem)` }}
        transition={SPRING_ANIMATION}
        className='flex items-center gap-4 md:max-w-[50%] max-w-[100%] mx-auto cursor-grab active:cursor-grabbing'>
        {REVIEWS.map((review, index) => (
          <ReviewCard
            key={review.name}
            review={review}
            index={index}
            activeIndex={activeIndex} />
        ))}
      </motion.ul>
      <Dots activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  )
}
function ReviewCard({ review, activeIndex, index }: { review: typeof REVIEWS[number], activeIndex: number, index: number }) {
  return (
    <motion.li
      animate={{
        scale: index === activeIndex ? 1 : 0.9,
      }}
      transition={SPRING_ANIMATION}
      className='bg-gray-100 px-8 py-8 w-full shrink-0 rounded-2 flex flex-col space-y-4 text-center rounded-md'>
      <Image
        src={review.image}
        alt={review.name}
        width={100}
        height={100}
        className='size-24 rounded-full mx-auto'
      />
      <h3 className='h3'>{review.name}</h3>
      <p className="description">{review.review}</p>
    </motion.li>
  )
}
function Dots({ activeIndex, setActiveIndex }: { activeIndex: number, setActiveIndex: Dispatch<SetStateAction<number>> }) {
  return (
    <ul className='flex items-center pt-4 gap-2 mx-auto'>
      {REVIEWS.map((_, index) => (
        <li key={index}>
          <button
            onClick={() => setActiveIndex(index)}
            className={
              cn(
                'w-2 h-2 rounded-full bg-gray-300 cursor-pointer',
                { 'bg-primary': index === activeIndex }
              )
            }
          />
        </li>
      ))}
    </ul>
  )
}
export default Reviews
