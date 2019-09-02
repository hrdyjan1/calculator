import { useState, useEffect, useRef } from 'react';
import { useForm } from './useForm';

export default function useInputs(initialForm) {
  const [data, setData] = useState(initialForm);
  const [error, setError] = useState(undefined);
  const [response, setFormData] = useForm();
  const settingData = useRef(setFormData);
  const initialingForm = useRef(initialForm);

  const handleSubmit = event => {
    event.preventDefault();
    setData(initialingForm.current);
  };

  const handleInputChange = event => {
    event.persist();
    setData(() => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  // Load data form from localstorage
  useEffect(() => {
    const info = localStorage.getItem('data');
    if (info) {
      setData(JSON.parse(info));
    }
  }, []);

  // Handle data form change
  useEffect(() => {
    settingData.current(data);
  }, [data]);

  // Handle error
  useEffect(() => {
    setError(response.error);
  }, [response.error]);

  // Handle reset
  useEffect(() => {
    if (response.reset) {
      setData(initialingForm.current);
    }
  }, [response.reset]);

  return [handleSubmit, handleInputChange, data, error];
}
