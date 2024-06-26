import React from 'react';
// Components
import Card from '@/components/Servicos/Card';
import Button from '@/components/Button';
// Icons
import { FaTruck } from 'react-icons/fa'; //transporte terrestre
import { GiCargoShip } from 'react-icons/gi'; //transporte maritimo
import { GiAirplaneDeparture } from 'react-icons/gi'; //transporte aéreo
import { CiBoxes } from 'react-icons/ci'; //Serviços Alfandegários:
import { GiHarborDock } from 'react-icons/gi'; //Serviços de Logística
const index = () => {
  return (
    <div className='gap-20 w-full h-auto flex flex-col items-center justify-around'>
      <div className='flex flex-col'>
        <h1 className='lg:text-7xl md:text-6xl text-yellow-500 font-bold sm:text-5xl xs:text-4xl xxs:text-3xl text-center'>
          Conheça nossos serviços
        </h1>
        <h3 className='text-xl text-yellow-500 font-semibold  text-center'>
          Clique no serviço para solicitá-lo!
        </h3>
      </div>
      <div className='flex flex-wrap xxs:px-5 md:px-0 items-center justify-center gap-10'>
        <Card
          href={
            'https://wa.me/5531994916651/?text=Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7ar%20um%20software%21%0ANome%20do%20Projeto%3A%20%0ADescri%C3%A7%C3%A3o%20do%20Projeto%20%3A%20%0AFuncionalidades%20Desejadas%20%3A%20%0APrazo%20de%20Entrega%20%3A%20%0AOr%C3%A7amento%20Dispon%C3%ADvel%20%3A%20'
          }
          icon={<FaTruck size={30} className='invert' />}
          title={'Transporte Terrestre'}
          text={
            'Navegamos pelas estradas com eficiência e segurança, oferecendo soluções de transporte terrestre ágeis e confiáveis para suas mercadorias, independentemente do destino ou da carga.'
          }
        />
        <Card
          href={
            'https://wa.me/5531994916651/?text=Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7ar%20um%20software%21%0ANome%20do%20Projeto%3A%20%0ADescri%C3%A7%C3%A3o%20do%20Projeto%20%3A%20%0AFuncionalidades%20Desejadas%20%3A%20%0APrazo%20de%20Entrega%20%3A%20%0AOr%C3%A7amento%20Dispon%C3%ADvel%20%3A%20'
          }
          icon={<GiCargoShip size={30} className='invert' />}
          title={'Transporte Marítimo'}
          text={
            'Conduzimos sua carga pelos mares com expertise, utilizando rotas marítimas estratégicas e parcerias confiáveis para garantir entregas pontuais e econômicas em todo o mundo.'
          }
        />
        <Card
          href={
            'https://wa.me/5531994916651/?text=Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7ar%20um%20software%21%0ANome%20do%20Projeto%3A%20%0ADescri%C3%A7%C3%A3o%20do%20Projeto%20%3A%20%0AFuncionalidades%20Desejadas%20%3A%20%0APrazo%20de%20Entrega%20%3A%20%0AOr%C3%A7amento%20Dispon%C3%ADvel%20%3A%20'
          }
          icon={<GiAirplaneDeparture size={30} className='invert' />}
          title={'Transporte Aéreo'}
          text={
            'Elevamos suas expectativas com nossos serviços de transporte aéreo rápido e eficiente. Com acesso a uma extensa rede de rotas e operadores, garantimos que suas mercadorias cheguem ao destino final no menor tempo possível.'
          }
        />
        <Card
          href={
            'https://wa.me/5531994916651/?text=Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7ar%20um%20software%21%0ANome%20do%20Projeto%3A%20%0ADescri%C3%A7%C3%A3o%20do%20Projeto%20%3A%20%0AFuncionalidades%20Desejadas%20%3A%20%0APrazo%20de%20Entrega%20%3A%20%0AOr%C3%A7amento%20Dispon%C3%ADvel%20%3A%20'
          }
          icon={<CiBoxes size={30} className='invert' />}
          title={'Serviços Alfandegários'}
          text={
            'Simplificamos os processos alfandegários complexos, fornecendo serviços de desembaraço aduaneiro rápidos e precisos para garantir a conformidade regulatória e a liberação rápida de sua carga.'
          }
        />
        <Card
          href={
            'https://wa.me/5531994916651/?text=Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7ar%20um%20software%21%0ANome%20do%20Projeto%3A%20%0ADescri%C3%A7%C3%A3o%20do%20Projeto%20%3A%20%0AFuncionalidades%20Desejadas%20%3A%20%0APrazo%20de%20Entrega%20%3A%20%0AOr%C3%A7amento%20Dispon%C3%ADvel%20%3A%20'
          }
          icon={<GiHarborDock size={30} className='invert' />}
          title={'Serviços de Logística'}
          text={
            'Vamos além do transporte básico, oferecendo soluções de logística completas e personalizadas para otimizar sua cadeia de suprimentos. Desde o armazenamento até a distribuição, estamos aqui para atender às suas necessidades logísticas com eficiência e profissionalismo.'
          }
        />
      </div>
      <Button />
    </div>
  );
};

export default index;
