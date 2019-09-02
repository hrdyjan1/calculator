import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import App from '../App';
import { initialForm, yesInsurance, noInsurance } from '../helpers/data';

const formData = JSON.stringify({
  money: 60000,
  months: 60,
  insurance: 'with',
});

describe('Testing calculator', () => {
  beforeEach(async () => {
    cleanup();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('localstorage, inputs and reset', () => {
    window.localStorage.setItem('data', formData);
    const { container, queryByText } = render(<App />);
    const resetButton = queryByText(/pokračovat/i);
    expect(resetButton).toBeDefined();
    fireEvent.click(resetButton);
    const inputsCollection = container.getElementsByTagName('input');
    const inputsArray = Object.values(inputsCollection);
    const moneyInput = inputsArray.filter(input => input.name === 'money')[0];

    expect(moneyInput).toBeDefined();
    expect(Number(moneyInput.value)).toBe(initialForm.money);
    expect(window.localStorage.getItem('data')).toBe(
      JSON.stringify(initialForm)
    );
  });

  test('checkbox', () => {
    const { container } = render(<App />);
    const inputsCollection = container.getElementsByTagName('input');
    const inputsArray = Object.values(inputsCollection);
    const withoutInsurance = inputsArray.filter(
      input => input.name === 'insurance' && input.value === 'without'
    )[0];
    const withInsurance = inputsArray.filter(
      input => input.name === 'insurance' && input.value === 'with'
    )[0];

    expect(withInsurance).toBeDefined();
    expect(withoutInsurance).toBeDefined();
    expect(withInsurance).toHaveProperty('value');
    expect(withoutInsurance).toHaveProperty('value');

    if (initialForm.insurance === yesInsurance) {
      expect(withInsurance).toHaveProperty('checked', true);
      fireEvent.click(withoutInsurance);
      expect(withoutInsurance).toHaveProperty('checked', true);
      expect(withInsurance).toHaveProperty('checked', false);
    } else if (initialForm.insurance === noInsurance) {
      expect(withoutInsurance).toHaveProperty('checked', true);
      fireEvent.click(withInsurance);
      expect(withInsurance).toHaveProperty('checked', true);
      expect(withoutInsurance).toHaveProperty('checked', false);
    } else {
      throw new Error('Missing initial value in insurance checkbox.');
    }
  });
});
