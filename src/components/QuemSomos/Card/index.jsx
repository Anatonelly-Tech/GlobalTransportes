import React from 'react';
import Button from '@/components/Button';

const index = ({ titulo, texto, horientacao, lista }) => {
  const breakLineAtSequence = (text, sequence) => {
    const parts = text.split(sequence);
    const nodes = parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <br />}{' '}
        {/* Adiciona <br /> se não for o último elemento */}
      </React.Fragment>
    ));
    return nodes;
  };
  return (
    <div
      data-aos-offset="100"
      data-aos={`fade-${horientacao === 'esq' ? 'right' : 'left'}`}
      className={`flex ${
        horientacao === 'esq' ? '' : 'flex-row-reverse'
      } items-center justify-between w-full h-auto lg:px-52 px-12 `}
    >
      <div className="flex flex-col gap-5 w-auto lg:max-w-[40%] h-full">
        <div className="text-white  bg-global shadow-md drop-shadow-md border border-yellow-600 flex flex-col items-start justify-start gap-3 p-10 rounded-md hover:scale-110 transition-all duration-300">
          <p className="text-3xl font-semibold">{titulo}</p>
          {lista ? (
            <ul className="list-disc flex flex-col pl-5 text-lg font-light">
              {lista.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-xl font-light">
              {breakLineAtSequence(texto, '*/')}
            </p>
          )}
        </div>
        <Button />
      </div>

      <div className="w-2/3 lg:flex hidden "></div>
    </div>
  );
};

export default index;
