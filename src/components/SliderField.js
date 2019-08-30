import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Field({ data, name, label, marks, handleChange }) {
  const handleSlider = title => (e, value) => {
    const event = { target: { name: title, value }, persist: () => {} };
    handleChange(event);
  };

  return (
    <>
      <Typography id="slider" gutterBottom>
        {label.heading}
      </Typography>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Slider
            value={data[name]}
            onChange={handleSlider([name])}
            aria-labelledby="slider"
            valueLabelDisplay="on"
            marks={marks}
            max={marks[marks.length - 1].value}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            name={name}
            label={label.value}
            onChange={handleChange}
            type="number"
            value={data[name]}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
        </Grid>
      </Grid>
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
