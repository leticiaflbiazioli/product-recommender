import mockProducts from '../mocks/mockProducts';
import { getRecommendations } from './recommendation.service';

describe('recommendationService', () => {
  it('should return sorted multiple products based on matching preferences and features', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      selectedFeatures: ['Gestão de leads e oportunidades'],
      selectedRecommendationType: 'MultipleProducts',
    };

    const result = getRecommendations(formData, mockProducts);
    expect(result.length).toBe(2);
    expect(result[0].name).toBe('RD Station CRM');
    expect(result[1].name).toBe('RD Station Marketing');
  });

  it('should return only the top product if selectedRecommendationType is "SingleProduct"', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      selectedFeatures: ['Gestão de leads e oportunidades'],
      selectedRecommendationType: 'SingleProduct',
    };

    const result = getRecommendations(formData, mockProducts);

    expect(result.length).toBe(1);
    expect(result[0].name).toBe('RD Station CRM');
  });
});
