import { useCallback } from 'react';
import recommendationService from '../services/recommendation.service';

function useRecommendations(products) {
  // Pensando em desempenho, usei o UseCallback para somente recriar a função, caso tenha mudança no products

  const getRecommendations = useCallback(
    (formData) => {
      return recommendationService.getRecommendations(formData, products);
    },
    [products]
  );

  return { getRecommendations };
}

export default useRecommendations;
