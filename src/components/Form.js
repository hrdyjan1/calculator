import React from 'react';
import { initialForm, monthsMarks, moneyMarks } from '../helpers/data';
import labels from '../helpers/labels';
import useInputs from '../hooks/useInputs';
import SliderField from './SliderField';
import QuestionField from './QuestionField';

export default function Form() {
  const [handleSubmit, handleChange, data] = useInputs(initialForm);

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
    </form>
  );
}
