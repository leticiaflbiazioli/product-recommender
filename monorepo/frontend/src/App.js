import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center my-8">
      <div>
        <div>
          <img width="200" src="/logo.svg" />
        </div>

        <h1 className="text-3xl font-bold mb-8 mt-4">
          Recomendador de Produtos RD Station
        </h1>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-2 mb-4">
          <h2 className="text-lg text-center mb-4">
            Bem-vindo ao <b>Recomendador de Produtos RD Station</b>.{' '}
          </h2>
          <p className="text-center">
            Aqui você pode encontrar uma variedade de produtos da RD Station,
            cada um projetado para atender às necessidades específicas do seu
            negócio. De CRM a Marketing, de Conversas a Inteligência Artificial,
            temos uma solução para ajudar você a alcançar seus objetivos. <br />
            Use o formulário abaixo para selecionar suas preferências e
            funcionalidades desejadas e receba recomendações personalizadas de
            produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <div>
          <Form setRecommendations={setRecommendations} />
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
