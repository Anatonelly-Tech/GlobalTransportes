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
import Servicos from '@/components/Servicos';
import Diferenciais from '@/components/Diferenciais';
import Carrosel from '@/components/Carrosel';

//library
//https://michalsnik.github.io/aos/
const slides = [
  'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
  'https://wallpapercave.com/wp/wp3386769.jpg',
  'https://wallpaperaccess.com/full/809523.jpg',
  'https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg',
];

const text = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  //0c0035
  return (
    <div className='max-w-screen w-full min-h-screen h-auto flex flex-col gap-20 items-center justify-start bg-global overflow-x-hidden '>
      <InicialScreen />
      <Carrosel slides={slides} text={text} />

      <Servicos />
      <Diferenciais />
      {/* <QuemSomos /> */}

      <NossosValores />
      <Footer />
      <WhatsButton />
    </div>
  );
}

/*
Promessa
Botão 
Nossos serviços
Botão 
Diferencias
Botão
Nossa história
Regiões de atuação 
Botão 
Nossos parceiros
Formulário 
Rodapé
*/
