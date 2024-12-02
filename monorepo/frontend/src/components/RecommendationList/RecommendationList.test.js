import { render, screen } from '@testing-library/react';
import React from 'react';
import RecommendationList from './RecommendationList';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('RecommendationList Component', () => {
  it('renders recommendations list when there are recommendations', () => {
    const recommendations = [
      { id: 1, name: 'Recommendation 1' },
      { id: 2, name: 'Recommendation 2' },
    ];

    render(<RecommendationList recommendations={recommendations} />);

    expect(screen.getByText('recommendationsList')).toBeInTheDocument();

    recommendations.forEach((recommendation) => {
      expect(screen.getByText(recommendation.name)).toBeInTheDocument();
    });

    expect(screen.getByText('plans')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.rdstation.com/planos/marketing/'
    );
  });

  it('renders empty message when no recommendations are available', () => {
    render(<RecommendationList recommendations={[]} />);

    expect(screen.getByText('recommendationsListEmpty')).toBeInTheDocument();
  });
});
