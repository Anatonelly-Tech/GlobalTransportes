import React from 'react';
import Card from './Card';

const index = () => {
  return (
    <div
      className="h-auto min-h-screen w-full bg-quemSomos bg-cover bg-no-repeat flex flex-col items-center justify-start"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <div className="w-full min-h-screen h-full bg-gradient-to-t from-[#120120] via-[#120120]/70 to-[#120120] flex flex-col items-center justify-start py-20 gap-24">
        <h2 className="text-7xl text-white font-semibold">Quem Somos?</h2>

        <Card
          titulo="Nossa História"
          texto="A Global Transportes iniciou suas atividades em junho de 2019 na cidade de Betim-MG. Foi em meio à pandemia, onde o mundo vivia em um período de incertezas, que ela se consolidou."
          horientacao="esq"
        />

        <Card
          titulo="Como surgiu?"
          texto="O insight para nossa mudança veio ao assistir um filme chamado Robôs, onde o personagem soldador fala uma simples frase mas que trouxe-me um grande impacto:
          */*/ > - Viu a necessidade?
          */ > - Atenda! */*/
          Deste modo foi criada a Global Transportes Logística Inteligente e Digital, conectando mais de 2 milhões de caminhoneiros autônomos, empresas e novos parceiros."
          horientacao="dir"
        />

        <Card
          titulo="Nossos Números"
          lista={[
            '26 estados e Distrito Federal',
            'Mais de 600 transportadoras parceiras',
            'Mais de 95 milhões em cargas transportadas',
            '18.000 clientes atendidos direta ou indiretamente',
            'Contamos com 100 mil motoristas cadastrados.',
          ]}
          horientacao="esq"
        />

        <Card
          titulo="Nossos Diferenciais"
          lista={[
            'Sistema de Frota Virtual e Frete 2.0',
            'Gestão da frota',
            'Redução de custos',
            'Aumento da performance',
            '+ 24 transportadoras',
            '+ 12 mil caminhões',
            'Cursos para caminhoneiros',
            'Cashback',
            'Carga seca',
            'Material biológico',
          ]}
          horientacao="dir"
        />
      </div>
    </div>
  );
};

export default index;
