import React from 'react';
import { RiScrollToBottomLine } from 'react-icons/ri';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

const index = () => {
  return (
    <div className="py-20 w-full h-screen text-yellow-600 text-5xl font-bold flex flex-col items-center justify-around">
      <h1 className="">Seja Bem Vindo a Global Transportes</h1>
      <img
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="w-2/5 h-2/5 filter animate-dropShadowPulse"
        src="./GlobalTransportes.svg"
        alt="Global Transportes Logo"
      />
      <div></div>
      <div className="animate-bounce text-center flex flex-col items-center justify-center gap-2 absolute mt-10 top-3/4">
        <RiScrollToBottomLine className="text-4xl" />
        <p className="text-xl">Scroll Down</p>
        <RiArrowDownDoubleLine className="text-4xl" />
      </div>
    </div>
  );
};

export default index;