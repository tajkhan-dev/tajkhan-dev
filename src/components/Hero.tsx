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
      <div className='h-screen flex justify-evenly'>
        <motion.div
          className='mt-40 max-w-[500px]'
          initial='hidden'
          whileInView='show'
         
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
            className=' font-display text-4xl  font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
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
        
        </motion.div>
        <motion.div
          className='mt-9'
          variants={FADE_UP_ANIMATION_VARIANTS}
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
