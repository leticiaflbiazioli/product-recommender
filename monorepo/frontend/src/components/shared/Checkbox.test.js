import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('renders checkbox with label text', () => {
    render(<Checkbox>Accept terms and conditions</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    const label = screen.getByText('Accept terms and conditions');
    expect(label).toBeInTheDocument();
  });

  it('checkbox should be checked when clicked', () => {
    render(<Checkbox>Accept terms and conditions</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('checkbox should be unchecked when clicked again', () => {
    render(<Checkbox>Accept terms and conditions</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it('checkbox passes custom props correctly', () => {
    render(
      <Checkbox id="terms" disabled={true}>
        Accept terms and conditions
      </Checkbox>
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveAttribute('id', 'terms');
  });
});
