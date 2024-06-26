import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Button from '@/components/Button';

const data = [
  {
    name: 'Transportes em diferentes modais',
    img: '/Carrossel/DiferentesModais.jpg',
    description:
      'Explore os diversos modos de transporte para otimizar a logística da sua empresa, escolhendo o mais adequado às suas necessidades e objetivos estratégicos.',
    link: '#',
  },
  {
    name: 'Atendimento em todo Brasil',
    img: '/Carrossel/AtendimentoBrasil.png',
    description:
      'Oferecemos serviços de transporte abrangentes em todo o território brasileiro, garantindo eficiência e confiabilidade para suas necessidades logísticas.',
    link: '#',
  },
  {
    name: 'Para coleta e entrega',
    img: '/Carrossel/ColetaEntrega.jpg',
    description:
      'Serviços de coleta e entrega adaptados às suas necessidades, assegurando que suas cargas cheguem ao destino de forma segura e pontual.',
    link: '#',
  },
  {
    name: 'Cargas fracionadas ou dedicadas',
    img: '/Carrossel/CargasFracionadasDedicadas.jpeg',
    description:
      'Oferecemos opções de transporte tanto para cargas fracionadas quanto dedicadas, atendendo de forma personalizada às exigências de cada cliente.',
    link: '#',
  },
  {
    name: 'Carregamento de carga de pequeno porte até carga indivisível',
    img: '/Carrossel/CarregamentoDeCarga.jpeg',
    description:
      'Capacidade para transportar desde pequenas cargas até itens indivisíveis de grande porte, com segurança e eficiência.',
    link: '#',
  },
];

const index = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='flex flex-col w-3/4 gap-10'>
      <div className='flex flex-col'>
        <h1 className='lg:text-7xl md:text-6xl text-yellow-500 font-bold sm:text-5xl xs:text-4xl xxs:text-3xl text-center'>
          Conheça nossos serviços
        </h1>
        <h3 className='text-xl text-yellow-500 font-semibold  text-center'>
          Clique no serviço para solicitá-lo!
        </h3>
      </div>
      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className='bg-white h-[450px] text-black rounded-xl '
            >
              <div className='h-56  bg-yellow-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt='' className='h-44 w-44 rounded-full' />
              </div>

              <div className='flex flex-col items-center justify-between md:gap-4 xxs:gap-2 p-4'>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <p className='text-base  font-semibold'>{d.name}</p>
                  <p className='text-xs  text-center'>{d.description}</p>
                </div>
                <a
                  href={d.link}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white  md:text-lg px-6 py-1 rounded-xl'
                >
                  Nos envie uma mensagem
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default index;
