/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Card = ({ image, title, text, last }) => {
  return (
    <div
      id='containerValores'
      className={`group w-full lg:min-h-[55vh] min-h-screen h-auto px-5 py-10 ${
        last == true
          ? 'lg:border-y lg:border-x-0 border'
          : 'lg:border-t lg:border-x-0 border'
      } border-yellow-500 flex items-center lg:flex-row flex-col gap-10 lg:justify-center justify-start transition-all duration-500 lg:cursor-pointer`}
    >
      <div
        id='ImgValores'
        className='child1 z-10 lg:absolute lg:group-hover:-translate-x-1/2  lg:w-auto w-2/3 flex items-center justify-center trantition-all duration-500'
      >
        <img
          id='imgDiv'
          src={image}
          alt={title}
          className='lg:h-[40vh] rounded'
        />
      </div>
      <div
        id='TitleAndText'
        className='child2 min-h-[50vh] lg:w-1/5 w-full text-center lg:p-0 p-10 lg:group-hover:translate-x-full flex flex-col justify-start items-center gap-5 text-white transition-all duration-500'
      >
        <h2 className='text-2xl font-bold w-full'>{title}</h2>
        {Array.isArray(text) ? (
          <ul className='mt-4 lg:group-hover:flex lg:hidden flex flex-col gap-1'>
            {text.map((item, index) => (
              <li key={index}>
                <h3 className='font-bold text-sm'>{item.title}</h3>
                <p className='text-xs'>{item.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className='mt-4 lg:group-hover:flex lg:hidden flex '>{text}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
