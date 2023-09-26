"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "./motion";
import { Button } from "./ui/button";

const About = () => {
  return (
    <>
      <motion.div className='h-screen flex justify-around'>
        <motion.div>
          <Image
            src={"/Developer activity-bro.png"}
            width={500}
            height={500}
            alt=''
          />
        </motion.div>
        <motion.div
          className='mt-20 max-w-[500px]'
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
            className=' font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            hello there !
          </motion.h1>
          <motion.p
            className='mt-4 font-medium   md:text-2xl'
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Web 3.0, Metaverse, and AI Jamstack Developer at your service
          </motion.p>
          {/* <Button className='mt-6 shadow-lg' asChild>
            <motion.button variants={FADE_UP_ANIMATION_VARIANTS}>
             About me
            </motion.button>
          </Button> */}
          <motion.div
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
            className=' flex flex-col gap-2 mt-4 text-foreground-500'
          >
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
              Professionally connected with the Jamstack development industry.
            </motion.p>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
              Problem solver, well-organised person,team player dedicated to the success of my clients
            </motion.p>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
              Fan of Boxing, outdoor activities, video games, and coding of
              course.
            </motion.p>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
              Interested in the entire frontend spectrum and working on
              ambitious projects with interesting people.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
