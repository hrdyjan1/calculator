import React, { useEffect } from 'react';

import useInput from '../hooks/useInput';
import { useForm } from '../hooks/useForm';
import { initialForm, yesInsurance, noInsurance } from '../helpers/data';

export default function Form() {
  const [insurance] = useInput(initialForm.insurance, 'insurance', 'radio');
  const [months] = useInput(initialForm.months, 'months', 'number');
  const [money] = useInput(initialForm.money, 'money', 'number');

  const [, setFormData] = useForm();

  const handleChange = React.useCallback(
    () =>
      setFormData({
        insurance: insurance.value,
        months: months.value,
        money: money.value,
      }),
    [insurance.value, money.value, months.value, setFormData]
  );

  useEffect(() => {
    handleChange({});
  }, [handleChange]);

  return (
    <form>
      <input
        value={money.value}
        name={money.name}
        type={money.type}
        onChange={money.onChange}
      />
      <input
        value={months.value}
        name={months.name}
        type={months.type}
        onChange={months.onChange}
      />
      <fieldset>
        <input
          value={yesInsurance}
          checked={insurance.value === yesInsurance}
          name={insurance.name}
          type={insurance.type}
          onChange={insurance.onChange}
        />
        <input
          value={noInsurance}
          checked={insurance.value === noInsurance}
          name={insurance.name}
          type={insurance.type}
          onChange={insurance.onChange}
        />
      </fieldset>
    </form>
  );
}
