import React from 'react';
import {
  initialForm,
  initialQuestionValues,
  monthsMarks,
  moneyMarks,
} from '../helpers/data';
import useInputs from '../hooks/useInputs';
import SliderField from './SliderField';
import QuestionField from './QuestionField';

export default function Form() {
  const [handleSubmit, handleChange, data] = useInputs(initialForm);

  // localStorage.setItem('pizzas', JSON.stringify(data));
  // const localPizzas = localStorage.getItem('pizzas');
  // return localPizzas ? JSON.parse(localPizzas) : [];

  return (
    <form onSubmit={handleSubmit}>
      <SliderField
        marks={moneyMarks}
        data={data}
        name="money"
        label="Peníze"
        handleChange={handleChange}
      />
      <br />
      <SliderField
        marks={monthsMarks}
        data={data}
        name="months"
        label="Měsíců"
        handleChange={handleChange}
      />
      <br />
      <QuestionField
        label="Pojištění proti neschopnosti půjčku splácet"
        data={data}
        values={initialQuestionValues}
        name="insurance"
        handleChange={handleChange}
      />
    </form>
  );
}
