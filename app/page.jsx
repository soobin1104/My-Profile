'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader/index';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <div className="text-[40px] font-bold">随便写点什么</div>
    </main>
  );
}
