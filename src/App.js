import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { FormProvider } from './hooks/useForm';
import { Banner, Form, Footer, Header } from './components';

export default function App() {
  return (
    <Container maxWidth="lg">
      <FormProvider>
        <Header />
        <Grid
          spacing={8}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Form />
          </Grid>
          <Grid item xs={6}>
            <Banner />
          </Grid>
        </Grid>
        <Footer />
      </FormProvider>
    </Container>
  );
}
