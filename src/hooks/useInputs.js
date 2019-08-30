import { useState, useEffect, useRef } from 'react';
import { useForm } from './useForm';

export default function useInputs(initialForm) {
  const [data, setData] = useState(initialForm);
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

  useEffect(() => {
    const info = localStorage.getItem('data');
    if (info) {
      setData(JSON.parse(info));
    }
  }, []);

  useEffect(() => {
    settingData.current(data);
  }, [data]);

  useEffect(() => {
    if (response.reset) {
      setData(initialingForm.current);
    }
  }, [response.reset]);

  return [handleSubmit, handleInputChange, data];
}
