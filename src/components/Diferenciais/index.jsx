import React from 'react';
import Button from '@/components/Button';

const index = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-10 p-5'>
      <span id='Lists' className='text-white md:text-5xl xxs:text-xl font-bold'>
        Nossos Diferenciais
      </span>
      <div className='flex md:flex-row xxs:flex-col w-full justify-center md:items-center xxs:items-start md:gap-52 '>
        <div className='flex flex-col '>
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal text-wrap w-full'
          >
            Sistema de Frota Virtual e Frete 2.0
          </li>{' '}
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            Gestão da frota
          </li>
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            Redução de custos
          </li>{' '}
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            Aumento da perfomance
          </li>{' '}
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            + 24 transportadoras
          </li>
        </div>
        <div className='flex flex-col'>
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            Cursos para caminhoneiros
          </li>
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            Cashback
          </li>
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            Carga seca
          </li>
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            Material biológico
          </li>
          <li
            id='Lists'
            className='text-white md:text-2xl xxs:text-base font-normal'
          >
            + 12 mil caminhões
          </li>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default index;
