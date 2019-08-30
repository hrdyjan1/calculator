import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useForm } from '../hooks/useForm';

export default function Banner() {
  const [response, , resetForm] = useForm();
  const { isLoading, data } = response;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={6}
    >
      <Grid item xs={5}>
        <h2>Měsíčně zaplatíte</h2>
        <div className="moneyPay">
          {isLoading ? <CircularProgress /> : <p>{data.moneyPay || 0}</p>}
        </div>
        <br />
      </Grid>
      <Button variant="contained" color="primary" onClick={resetForm}>
        Pokračovat
      </Button>
      <Button variant="contained" color="secondary" onClick={resetForm}>
        Nebo nám zavoláte
      </Button>
    </Grid>
  );
}
