import { useState, useEffect } from 'react';
import { useForm } from './useForm';

export default function useInputs(initialForm) {
  const [data, setData] = useState(initialForm);
  const [, setFormData, resetForm] = useForm();

  const handleSubmit = event => {
    event.preventDefault();
    resetForm();
  };

  const handleInputChange = event => {
    event.persist();
    setData(() => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    setFormData(data);
  }, [data, setFormData]);

  return [handleSubmit, handleInputChange, data];
}
