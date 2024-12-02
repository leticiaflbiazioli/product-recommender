import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { clearText } from '../../../utils/clearText';
import Preferences from './Preferences';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('Preferences Component', () => {
  const preferencesMock = [
    'Preference One',
    'Preference Two',
    'Preference Three',
  ];
  const selectedPreferencesMock = [];
  const onPreferenceChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders preferences list with checkboxes', () => {
    render(
      <Preferences
        preferences={preferencesMock}
        selectedPreferences={selectedPreferencesMock}
        onPreferenceChange={onPreferenceChangeMock}
      />
    );

    preferencesMock.forEach((preference) => {
      expect(
        screen.getByText(`preferencesList.${clearText(preference)}`)
      ).toBeInTheDocument();
    });
  });

  it('displays checkboxes with correct initial state', () => {
    render(
      <Preferences
        preferences={preferencesMock}
        selectedPreferences={selectedPreferencesMock}
        onPreferenceChange={onPreferenceChangeMock}
      />
    );

    expect(screen.getByDisplayValue('Preference One').checked).toBeFalsy();
    expect(screen.getByDisplayValue('Preference Two').checked).toBeFalsy();
    expect(screen.getByDisplayValue('Preference Three').checked).toBeFalsy();
  });

  it('calls onPreferenceChange when a checkbox is toggled', () => {
    render(
      <Preferences
        preferences={preferencesMock}
        selectedPreferences={selectedPreferencesMock}
        onPreferenceChange={onPreferenceChangeMock}
      />
    );

    const checkbox = screen.getByDisplayValue('Preference One');
    fireEvent.click(checkbox);

    expect(onPreferenceChangeMock).toHaveBeenCalledWith(['Preference One']);
  });

  it('removes a preference when unchecked', () => {
    render(
      <Preferences
        preferences={preferencesMock}
        selectedPreferences={['Preference One']}
        onPreferenceChange={onPreferenceChangeMock}
      />
    );

    const checkbox = screen.getByDisplayValue('Preference One');
    fireEvent.click(checkbox);

    expect(onPreferenceChangeMock).toHaveBeenCalledWith([]);
    expect(screen.getByDisplayValue('Preference One').checked).toBeFalsy();
  });
});
