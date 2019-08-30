import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

function QuestionField({ data, name, labels, handleChange }) {
  return (
    <>
      <FormLabel component="legend">{labels.heading}</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={data.insurance}
        onChange={handleChange}
        row
      >
        {labels.values.map((single, index) => (
          <FormControlLabel
            key={index}
            value={single.value}
            label={single.label}
            name={name}
            control={<Radio color="primary" />}
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
  labels: PropTypes.object,
};

export default memo(QuestionField);
