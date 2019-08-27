import React from 'react';
import { useForm } from '../hooks/useForm';

export default function Banner() {
  const [response] = useForm();
  return <div>{response.data.moneyPay}</div>;
}
