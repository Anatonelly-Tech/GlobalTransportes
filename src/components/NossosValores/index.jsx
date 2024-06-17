/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Card from './Card';

const index = () => {
  const textArray = [
    {
      title: 'Qualidade',
      text: 'Compromisso com a excelência em todos os aspectos do nosso trabalho, buscando sempre superar as expectativas dos nossos clientes.',
    },
    {
      title: 'Inovação',
      text: 'Buscando constantemente soluções inovadoras para otimizar os processos logísticos, garantindo maior eficiência e segurança.',
    },
    {
      title: 'Sustentabilidade',
      text: 'Priorizando práticas sustentáveis em todas as nossas operações, buscando minimizar o impacto ambiental e promover o desenvolvimento social.',
    },
    {
      title: 'Transparência',
      text: 'Promovendo a comunicação clara e honesta com todos os nossos stakeholders, construindo relações de confiança e respeito.',
    },
    {
      title: 'Ética',
      text: 'Agindo com integridade e responsabilidade em todas as nossas decisões,  pautando nossas ações em princípios éticos e valores morais.',
    },
  ];

  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center justify-start md:gap-0 gap-10">
      <h2 className="lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl xxs:text-3xl text-white font-semibold">
        Missão Visão e Valores
      </h2>
      <Card
        image="https://ikmob.com/wp-content/uploads/2019/12/visao-empresa.jpg"
        title="Missão"
        text="A empresa tem como objetivo primordial otimizar toda a cadeia de suprimentos, desde a coleta e armazenamento até a distribuição dos produtos, garantindo que cada etapa do processo seja executada com excelência.

Para isso, ela conta com uma equipe altamente qualificada, tecnologia de ponta e uma ampla rede de parceiros logísticos, que permitem a agilidade nas operações e a maximização da satisfação dos clientes."
        last={false}
      />
      <Card
        image="https://qualyteam.com/pb/wp-content/uploads/2023/04/artigo-missao-visao-e-valores-da-empresa-1024x575.jpg"
        title="Visão"
        text="Liderar a revolução da logística inteligente, redefinindo a forma como as pessoas e mercadorias são conectadas globalmente.
        
        Buscamos ser reconhecidos como a principal plataforma que une motoristas confiáveis a pessoas e empresas que precisam realizar fretes de maneira eficiente, segura e sustentável.
        Ao integrar tecnologia de ponta, dados precisos e uma abordagem centrada no cliente, aspiramos criar um impacto positivo nas vidas das pessoas, otimizar a utilização de recursos e contribuir para um mundo mais conectado e interdependente."
        last={false}
      />
      <Card
        image="https://tangerino.com.br/blog/wp-content/uploads/2020/09/Missao-visao-e-valores-definindo-os-conceitos-da-sua-empresa-1.jpg"
        title="Nossos Valores"
        text={textArray}
        last={true}
      />
    </div>
  );
};

export default index;
