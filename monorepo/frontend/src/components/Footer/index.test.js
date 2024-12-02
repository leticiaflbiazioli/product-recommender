import { render, screen } from '@testing-library/react';
import React from 'react';
import { Footer } from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('Footer Component', () => {
  it('renders footer content correctly', () => {
    render(<Footer />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/logo.svg');
    expect(logo).toHaveAttribute('width', '200');

    expect(screen.getByText('phone')).toBeInTheDocument();
    expect(screen.getByText('+55 48 3877-2700')).toBeInTheDocument();

    expect(screen.getByText('address')).toBeInTheDocument();
    expect(screen.getByText('Florianópolis - SC')).toBeInTheDocument();
  });

  it('should display translated phone and address correctly', () => {
    render(<Footer />);

    expect(screen.getByText('phone')).toBeInTheDocument();
    expect(screen.getByText('address')).toBeInTheDocument();
  });
});
