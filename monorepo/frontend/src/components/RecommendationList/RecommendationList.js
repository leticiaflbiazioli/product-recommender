import React from 'react';
import { useTranslation } from 'react-i18next';

function RecommendationList({ recommendations }) {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-center bg-[#19c2ce38] rounded-lg">
        {t('recommendationsList')}
      </h2>

      {recommendations.length > 0 ? (
        <div className="my-8">
          <ul>
            {recommendations.map((recommendation, index) => (
              <li key={index} className="mb-2">
                <div className="bg-[#5e5f5f38] text-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                  <h2 className="text-black font-bold text-center">
                    {recommendation.name}
                  </h2>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <a
              href="https://www.rdstation.com/planos/marketing/"
              className="text-[#19c1ce] hover:text-gray-500 my-8"
              target="_blank"
              rel="noreferrer"
            >
              {t('plans')}
            </a>
          </div>
        </div>
      ) : (
        <p>{t('recommendationsListEmpty')}</p>
      )}
    </div>
  );
}

export default RecommendationList;
