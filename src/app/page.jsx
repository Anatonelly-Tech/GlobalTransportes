/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InicialScreen from '@/components/InicialScreen';
import QuemSomos from '@/components/QuemSomos';
import NossosValores from '@/components/NossosValores';
import Footer from '@/components/Footer';
import WhatsButton from '@/components/WhatsButton';
//library
//https://michalsnik.github.io/aos/

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  //0c0035
  return (
    <div className="max-w-screen w-full min-h-screen h-auto flex flex-col gap-20 items-center justify-start bg-global overflow-x-hidden ">
      <InicialScreen />
      <QuemSomos />
      <NossosValores />
      <Footer />
      <WhatsButton />
    </div>
  );
}
