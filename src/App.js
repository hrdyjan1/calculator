import React from 'react';
import { FormProvider } from './hooks/useForm';
import Form from './components/Form';
import Banner from './components/Banner';

export default function App() {
  return (
    <FormProvider>
      <Form />
      <Banner />
    </FormProvider>
  );
}
