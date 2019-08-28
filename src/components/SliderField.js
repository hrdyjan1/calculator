import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

function Field({ data, name, label, marks, handleChange }) {
  const handleSlider = title => (e, value) => {
    const event = { target: { name: title, value }, persist: () => {} };
    handleChange(event);
  };

  return (
    <>
      <Slider
        value={data[name]}
        onChange={handleSlider([name])}
        aria-labelledby="discrete-slider-always"
        valueLabelDisplay="on"
        marks={marks}
        max={marks[marks.length - 1].value}
      />
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        type="number"
        value={data[name]}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      {/* <input
        value={data[name]}
        name={name}
        type="number"
        onChange={handleChange}
      /> */}
    </>
  );
}

Field.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  marks: PropTypes.array,
};

export default memo(Field);
