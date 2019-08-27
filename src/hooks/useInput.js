import { useState } from 'react';

export default function useInput(initialValue = null, name, type = 'text') {
  const [value, setState] = useState(initialValue);

  const handleChange = e => {
    setState(e.target.value);
  };

  const inputProps = {
    value,
    name,
    type,
    onChange: handleChange,
  };

  return [inputProps];
}
