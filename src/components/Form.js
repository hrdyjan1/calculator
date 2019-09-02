import React from 'react';

import { labels, initialForm, monthsMarks, moneyMarks } from '../helpers/data';

import useInputs from '../hooks/useInputs';
import SliderField from './SliderField';
import QuestionField from './QuestionField';
import Warning from './Warning';

export default function Form() {
  const [handleSubmit, handleChange, data, error] = useInputs(initialForm);

  return (
    <form onSubmit={handleSubmit}>
      <SliderField
        marks={moneyMarks}
        data={data}
        name="money"
        label={labels.money}
        handleChange={handleChange}
      />
      <br />
      <SliderField
        label={labels.months}
        marks={monthsMarks}
        data={data}
        name="months"
        handleChange={handleChange}
      />
      <br />
      <QuestionField
        labels={labels.insurance}
        data={data}
        name="insurance"
        handleChange={handleChange}
      />
      <Warning error={error} />
    </form>
  );
}
