import React from 'react';
import Grid from '@material-ui/core/Grid';

import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
        className={styles.background}
>

          <Grid item xs={0} md={4}>
          </Grid>

          <Grid item xs={12} md={4} className={styles.card}>
          <h1>
          Power Station
      </h1>

          <h2>
          gon give it to ya
          </h2>
          </Grid>
      </Grid>
  );
};
