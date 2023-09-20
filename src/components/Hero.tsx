"use client";

import React from "react";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
} from "./motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className='flex justify-evenly'>
        <motion.div
          className='mt-40 max-w-[500px]'
          initial='hidden'
          animate='show'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            className=' font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Taj Khan
          </motion.h1>
          <motion.p
            className='mt-4   md:text-xl'
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Exploring the Future ! Web 3.0, Metaverse, and AI Jamstack Developer
          </motion.p>
          <Button className='mt-6 shadow-lg' asChild>
            <motion.button variants={FADE_UP_ANIMATION_VARIANTS}>
             download CV
            </motion.button>
          </Button>
          <Button className='mt-6 ml-4 shadow-lg' asChild>
            <motion.button variants={FADE_UP_ANIMATION_VARIANTS}>
             Contact me !!
            </motion.button>
          </Button>
          <motion.div className='flex gap-4 mt-6 items-center'>
       
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='1.2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-linkedin'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                <rect width='4' height='12' x='2' y='9' />
                <circle cx='4' cy='4' r='2' />
              </svg>
          
     
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='1.2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-github'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                <path d='M9 18c-4.51 2-5-2-7-2' />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
         
          </motion.div>
        </motion.div>
        <motion.div
          className='mt-9'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          initial='hidden'
          whileInView={"show"}
        >
          <Image
            className=''
            src={"/metaverso-bro.png"}
            width={500}
            height={500}
            alt=''
          />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
