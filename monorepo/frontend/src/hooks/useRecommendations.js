import { useCallback } from 'react';
import { getRecommendations as getRecommentationsFromService } from '../services/recommendation.service';

function useRecommendations(products) {
  const getRecommendations = useCallback(
    (formData) => {
      return getRecommentationsFromService(formData, products);
    },
    [products]
  );

  return { getRecommendations };
}

export default useRecommendations;
