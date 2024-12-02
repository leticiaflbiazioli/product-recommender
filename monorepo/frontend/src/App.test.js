import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

jest.mock('./components/Form/Form', () => {
  return jest.fn(() => <div data-testid="form-component"></div>);
});

jest.mock('./components/RecommendationList/RecommendationList', () => {
  return jest.fn(() => <div data-testid="recommendation-list-component"></div>);
});

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('App', () => {
  it('should render the title, welcome text and disclaimer text', () => {
    render(<App />);

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('welcome')).toBeInTheDocument();
    expect(screen.getByText('disclaimer')).toBeInTheDocument();
    expect(screen.getByText('usage')).toBeInTheDocument();
  });

  it('should render Form and RecommendationList components', () => {
    render(<App />);

    expect(screen.getByTestId('form-component')).toBeInTheDocument();
    expect(
      screen.getByTestId('recommendation-list-component')
    ).toBeInTheDocument();
  });

  it('should update recommendations when the form is submitted', async () => {
    render(<App />);

    const setRecommendations = jest.fn();

    act(() => {
      setRecommendations([{ id: 1, name: 'Product 1' }]);
    });

    expect(setRecommendations).toHaveBeenCalledTimes(1);
    expect(setRecommendations).toHaveBeenCalledWith([
      { id: 1, name: 'Product 1' },
    ]);
  });
});
