import React from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  cleanup,
  fireEvent,
  flushEffects,
} from '@testing-library/react';
import App from '../App';
import { initialForm, yesInsurance, noInsurance } from '../helpers/data';

describe('Testing calculator', async () => {
  beforeEach(async () => {
    cleanup();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('localstorage, inputs and reset', () => {
    window.localStorage.setItem(
      'data',
      JSON.stringify({
        money: 60000,
        months: 60,
        insurance: 'with',
      })
    );
    const { container, queryByText } = render(<App />);
    const resetButton = queryByText(/pokračovat/i);
    expect(resetButton).toBeDefined();
    fireEvent.click(resetButton);
    const inputs = container.getElementsByTagName('input');
    const moneyInput = inputs.filter(input => input.name === 'money');
    expect(moneyInput.value).toBe(initialForm.money);
    flushEffects();
    expect(window.localStorage.getItem('data')).toBe(
      JSON.stringify(initialForm)
    );
  });

  test('checkbox', () => {
    const { container } = render(<App />);
    const inputs = container.getElementsByTagName('input');
    const withoutInsurance = inputs.filter(
      input => input.name === 'insurance' && input.value === 'without'
    );
    const withInsurance = inputs.filter(
      input => input.name === 'insurance' && input.value === 'with'
    );

    if (initialForm.insurance === yesInsurance) {
      expect(withInsurance).toHaveProperty('checked');
      fireEvent.click(withoutInsurance);
      expect(withoutInsurance).toHaveProperty('checked');
      expect(withInsurance).not.toHaveProperty('checked');
    } else if (initialForm.insurance === noInsurance) {
      expect(withoutInsurance).toHaveProperty('checked');
      fireEvent.click(withInsurance);
      expect(withInsurance).toHaveProperty('checked');
      expect(withoutInsurance).not.toHaveProperty('checked');
    } else {
      throw new Error('Missing initial value in insurance checkbox.');
    }
  });
});
