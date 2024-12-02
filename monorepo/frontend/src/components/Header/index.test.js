import { fireEvent, render, screen } from '@testing-library/react';
import i18n from 'i18next';
import React from 'react';
import { Header } from '.';

jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
  language: 'pt',
}));

describe('Header Component', () => {
  it('renders logo and language toggle button', () => {
    render(<Header />);

    const logo = screen.getByTestId('logo');
    expect(logo).toHaveAttribute('src', '/logo.svg');
    expect(logo).toHaveAttribute('width', '200');

    const flagImage = screen.getByAltText('flag');
    expect(flagImage).toHaveAttribute('src', 'united-kingdom.png');
    expect(flagImage).toHaveStyle('width: 28px');
  });

  it('toggles language when flag is clicked', () => {
    render(<Header />);

    expect(i18n.language).toBe('pt');

    const flagImage = screen.getByAltText('flag');
    expect(flagImage).toHaveAttribute('src', 'united-kingdom.png');

    fireEvent.click(flagImage);

    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
    expect(i18n.language).toBe('pt');

    expect(flagImage).toHaveAttribute('src', 'brazil.png');
  });
});
