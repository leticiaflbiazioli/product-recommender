import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';

jest.mock('../../hooks/useProducts', () => ({
  __esModule: true,
  default: () => ({
    preferences: ['Preference A', 'Preference B'],
    features: ['Feature X', 'Feature Y'],
    products: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ],
  }),
}));

jest.mock('../../hooks/useForm', () => ({
  __esModule: true,
  default: () => ({
    formData: {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: 'MultipleProducts',
    },
    handleChange: jest.fn(),
  }),
}));

jest.mock('../../hooks/useRecommendations', () => ({
  __esModule: true,
  default: () => ({
    getRecommendations: jest.fn(() => [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ]),
  }),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('Form Component', () => {
  const setRecommendationsMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders preferences, features, recommendation type, and submit button', () => {
    render(<Form setRecommendations={setRecommendationsMock} />);

    expect(screen.getByText(/preferences:/i)).toBeInTheDocument();
    expect(screen.getByText(/features:/i)).toBeInTheDocument();
    expect(screen.getByText(/recommendationType:/i)).toBeInTheDocument();

    const submitButton = screen.getByText(/button/i);
    expect(submitButton).toBeInTheDocument();
  });

  it('handles form submission correctly', () => {
    render(<Form setRecommendations={setRecommendationsMock} />);

    const submitButton = screen.getByRole('button', { name: /button/i });
    fireEvent.click(submitButton);

    expect(setRecommendationsMock).toHaveBeenCalledWith([
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ]);
  });
});
