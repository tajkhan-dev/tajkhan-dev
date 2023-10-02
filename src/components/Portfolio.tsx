"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from './motion'

 
 const Portfolio = () => {
  return (
  <>
  
  <motion.h1
          variants={FADE_UP_ANIMATION_VARIANTS}
          className='text-center font-display text-2xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]'
        >
          Portfolio
        </motion.h1>
<div className='mt-10 flex justify-around items-center '>
  <div>
    <Image className='shadow-lg ' src="/Dine-Market.png" width={600} height={600} alt=''/>

  </div>
  <div className='grid grid-cols-2 gap-5'>
  <Image className='shadow-lg'  src="/degens.png" width={300} height={300} alt=''/>
  <Image className='shadow-lg'  src="/Codevista.png" width={300} height={300} alt=''/>
  <Image className='shadow-lg'  src="/payment.png" width={300} height={300} alt=''/>
  <Image className='shadow-lg'  src="/guide.png" width={300} height={300} alt=''/>





  </div>
</div>
  </>
  )
}

export default Portfolio