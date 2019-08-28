import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

function QuestionField({ data, values, name, label, handleChange }) {
  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={data.insurance}
        onChange={handleChange}
        row
      >
        {values.map((single, index) => (
          <FormControlLabel
            key={index}
            value={single.value}
            name={name}
            control={<Radio color="primary" />}
            label={single.label}
            onChange={handleChange}
          />
        ))}
      </RadioGroup>
    </>
  );
}

QuestionField.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  values: PropTypes.array,
  label: PropTypes.string,
};

export default memo(QuestionField);
