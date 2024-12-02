import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center my-8">
      <div className="w-full md:w-3/4 lg:w-2/3 px-8">
        <h1 className="text-3xl font-bold mb-8 mt-4">{t('title')}</h1>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3 gap-8">
        <div className="col-span-2 mb-4">
          <h2 className="text-lg text-center mb-4 font-medium">
            {t('welcome')}
          </h2>
          <p className="text-center">{t('disclaimer')}</p>
          <p className="text-center">{t('usage')}</p>
          <hr className="my-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-testid="form-component">
            <Form setRecommendations={setRecommendations} />
          </div>
          <div data-testid="recommendation-list-component">
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
