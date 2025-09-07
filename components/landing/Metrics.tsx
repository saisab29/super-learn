'use client'

import { type PropsWithChildren, useRef } from 'react'
import NextImage from 'next/image'
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'

import { MetricsItem } from '@/components/landing/MetricsItem'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

import FaceOne from '@/public/img/face-1.png'
import FaceTwo from '@/public/img/face-2.png'
import FaceThree from '@/public/img/face-3.png'
import FaceFour from '@/public/img/face-4.png'

export function Metrics({ children }: PropsWithChildren) {
  const ref = useRef<HTMLUListElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', `end 0.7`],
  })

  const opacity = useSpring(useTransform(scrollYProgress, [0.34, 0.425, 0.98, 1], [0, 1, 1, 0]))

  return (
    <section className="pb-8 pt-16 md:py-20">
      <AnimatedTitle>
        <h2 className="heading-section">
          <span className="text-primary">SuperLearn</span> by the numbers
        </h2>
      </AnimatedTitle>
      <ul ref={ref} className="relative mt-24 grid grid-cols-12 pb-40 sm:grid-cols-9 lg:px-[15%]">
        <li className="sticky top-[20%] col-start-2 col-end-12 pb-8 sm:col-start-3 sm:col-end-8 sm:pb-16 lg:top-[5%] lg:pb-40">
          <MetricsItem
            className="bg-primary-light"
            number={12}
            description="lessons built so far"
            offset={20}
            progress={scrollYProgress}
          >
            <span className="relative block aspect-square w-full">
              <NextImage src={FaceOne} alt="Rust" fill className="object-contain" />
            </span>
          </MetricsItem>
        </li>
        <li className="sticky top-[22.5%] col-start-2 col-end-12 pb-8 sm:col-start-1 sm:col-end-5 sm:pb-16 lg:pb-40">
          <MetricsItem
            className="bg-secondary"
            number={3}
            description="courses available"
            offset={22.5}
            progress={scrollYProgress}
          >
            <span className="relative block aspect-square w-full">
              <NextImage src={FaceFour} alt="Postgres" fill className="object-contain" />
            </span>
          </MetricsItem>
        </li>
        <li className="sticky top-[25%] col-start-2 col-end-12 pb-8 sm:col-start-6 sm:col-end-10 sm:pb-16 lg:pb-40">
          <MetricsItem
            className="bg-highlight"
            number={120}
            suffix="%"
            description="type-safe codebase"
            offset={25}
            progress={scrollYProgress}
          >
            <span className="relative block aspect-square w-full">
              <NextImage src={FaceTwo} alt="Python" fill className="object-contain" />
            </span>
          </MetricsItem>
        </li>
        <li className="sticky top-[20%] col-start-1 col-end-13 pb-8 sm:col-start-2 sm:col-end-9 sm:pb-16 lg:top-[5%] lg:pb-40">
          <MetricsItem
            className="bg-gradient-to-b from-primary to-primary-depth to-80%"
            number={1}
            description="dev building this"
            offset={20}
            progress={scrollYProgress}
            last
          >
            <span className="relative block aspect-square w-full">
              <NextImage src={FaceThree} alt="SuperLearn" fill className="object-contain" />
            </span>
          </MetricsItem>
        </li>
        <li className="z-1 col-start-1 col-end-13 sm:col-end-10">
          <div className="">{children}</div>
        </li>
      </ul>
      <motion.div className="fixed inset-0 -z-1 bg-primary-dark" style={{ opacity }} />
    </section>
  )
}
