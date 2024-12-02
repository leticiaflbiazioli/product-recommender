import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Features from './Features';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('Features Component', () => {
  const featuresMock = ['Feature One', 'Feature Two'];
  const selectedFeaturesMock = [];
  const onFeatureChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders features with checkboxes', () => {
    render(
      <Features
        features={featuresMock}
        selectedFeatures={selectedFeaturesMock}
        onFeatureChange={onFeatureChangeMock}
      />
    );

    expect(screen.getByText(/features:/i)).toBeInTheDocument();

    featuresMock.forEach((feature) => {
      expect(
        screen.getByText(
          `featuresList.${feature.replace(/\s/g, '').toLowerCase()}`
        )
      ).toBeInTheDocument();
    });

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(featuresMock.length);
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
  });

  it('calls onFeatureChange with updated features when a checkbox is toggled', () => {
    render(
      <Features
        features={featuresMock}
        selectedFeatures={selectedFeaturesMock}
        onFeatureChange={onFeatureChangeMock}
      />
    );

    const secondCheckbox = screen.getByLabelText(
      `featuresList.${featuresMock[1].replace(/\s/g, '').toLowerCase()}`
    );
    fireEvent.click(secondCheckbox);

    expect(onFeatureChangeMock).toHaveBeenCalledWith([
      ...selectedFeaturesMock,
      featuresMock[1],
    ]);
  });

  it('removes a feature when unchecked', () => {
    render(
      <Features
        features={featuresMock}
        selectedFeatures={['Feature One']}
        onFeatureChange={onFeatureChangeMock}
      />
    );

    const firstCheckbox = screen.getByDisplayValue('Feature One');
    fireEvent.click(firstCheckbox);

    expect(onFeatureChangeMock).toHaveBeenCalledWith([]);
    expect(screen.getByDisplayValue('Feature One').checked).toBeFalsy();
  });
});
