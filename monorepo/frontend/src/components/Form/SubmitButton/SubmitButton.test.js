import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  it('renders SubmitButton component', () => {
    render(<SubmitButton text="Enviar" />);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Enviar');
  });

  it('renders correct text on button', () => {
    render(<SubmitButton text="Clique aqui" />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Clique aqui');
  });

  it('button has the correct classes', () => {
    render(<SubmitButton text="Enviar" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-[#19c1ce]');

    expect(button).toHaveClass('hover:bg-blue-700');
  });

  it('button has type submit', () => {
    render(<SubmitButton text="Enviar" />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
