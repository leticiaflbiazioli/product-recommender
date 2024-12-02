import React from 'react';
import { useTranslation } from 'react-i18next';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ initialValue, onRecommendationTypeChange }) {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">{t('recommendationType')}:</h2>
      <div className="flex items-center">
        <Checkbox
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          id="SingleProduct"
          onChange={() => onRecommendationTypeChange('SingleProduct')}
          className="mr-2"
          checked={initialValue === 'SingleProduct'}
        />
        <label htmlFor="SingleProduct" className="mr-4">
          {t('recommendationTypeList.single')}
        </label>
        <Checkbox
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          id="MultipleProducts"
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
          className="mr-2"
          checked={initialValue === 'MultipleProducts'}
        />
        <label htmlFor="MultipleProducts">
          {t('recommendationTypeList.multiple')}
        </label>
      </div>
    </div>
  );
}

export default RecommendationType;
