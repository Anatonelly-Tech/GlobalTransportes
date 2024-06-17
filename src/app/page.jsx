/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InicialScreen from '@/components/InicialScreen';
import NossosValores from '@/components/NossosValores';
import Footer from '@/components/Footer';
//library
//https://michalsnik.github.io/aos/

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='max-w-screen w-full min-h-screen h-auto flex flex-col gap-96 items-center justify-start bg-[#120120]'>
      <InicialScreen />
      <NossosValores />
      <Footer />
    </div>
  );
}
