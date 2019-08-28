import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm } from '../hooks/useForm';

export default function Banner() {
  const [response] = useForm();
  const { isLoading, data } = response;

  return (
    <div>{isLoading ? <CircularProgress /> : <p>{data.moneyBack || 0}</p>}</div>
  );
}
