import { fireEvent, render, screen } from '@testing-library/react';
import RecommendationType from './RecommendationType';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        recommendationType: 'Tipo de Recomendação',
        'recommendationTypeList.single': 'Produto Único',
        'recommendationTypeList.multiple': 'Múltiplos Produtos',
      };
      return translations[key];
    },
  }),
}));

describe('RecommendationType', () => {
  const mockOnRecommendationTypeChange = jest.fn();

  beforeEach(() => {
    mockOnRecommendationTypeChange.mockClear();
  });

  it('renders the component with localized texts', () => {
    render(
      <RecommendationType
        initialValue="MultipleProducts"
        onRecommendationTypeChange={mockOnRecommendationTypeChange}
      />
    );

    expect(screen.getByText('Tipo de Recomendação:')).toBeInTheDocument();

    expect(screen.getByLabelText('Produto Único')).toBeInTheDocument();
    expect(screen.getByLabelText('Múltiplos Produtos')).toBeInTheDocument();
  });

  it('renders with the correct initial value', () => {
    render(
      <RecommendationType
        initialValue="MultipleProducts"
        onRecommendationTypeChange={mockOnRecommendationTypeChange}
      />
    );

    const singleProductRadio = screen.getByLabelText('Produto Único');
    const multipleProductsRadio = screen.getByLabelText('Múltiplos Produtos');

    expect(singleProductRadio).not.toBeChecked();
    expect(multipleProductsRadio).toBeChecked();
  });

  it('calls onRecommendationTypeChange when the option changes', () => {
    render(
      <RecommendationType
        initialValue="MultipleProducts"
        onRecommendationTypeChange={mockOnRecommendationTypeChange}
      />
    );

    const singleProductRadio = screen.getByLabelText('Produto Único');
    fireEvent.click(singleProductRadio);

    expect(mockOnRecommendationTypeChange).toHaveBeenCalledTimes(1);
    expect(mockOnRecommendationTypeChange).toHaveBeenCalledWith(
      'SingleProduct'
    );
  });
});
