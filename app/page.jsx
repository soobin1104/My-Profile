'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader/index';
import { motion } from 'framer-motion';
export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll();

  //     setTimeout(() => {
  //       setIsLoading(false);
  //       document.body.style.cursor = 'default';
  //       window.scrollTo(0, 0);
  //     }, 2000);
  //   })();
  // }, []);

  return (
    <div className="flex flex-col h-full gap-4 px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence> */}

      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2 lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2">
        {/* TITLE */}
        <h1 className="text-4xl font-bold md:text-6xl">
          Give people wonderful tools,and they can do wonderful things.
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站欢迎来到我的个人网站
        </p>
        {/* BUTTONS */}
        <div className="flex w-full gap-4">
          <motion.button
            className="p-4 text-white bg-black rounded-lg ring-1 ring-black"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            我的工作
          </motion.button>
          <button className="p-4 rounded-lg ring-1 ring-black">联系我吧</button>
        </div>
      </div>
    </div>
  );
}
