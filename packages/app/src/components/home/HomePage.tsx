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

            <Grid item xs={false} md={4}>
            </Grid>

            <Grid item xs={12} md={4} className={styles.card}>
                <h1>
                    Power Station
                </h1>
            </Grid>

            <audio autoPlay>
                <source src="https://upload.wikimedia.org/wikipedia/commons/3/32/Mega_Hyper_Ultrastorm_%28ISRC_USUAN1700003%29.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
            </audio>

        </Grid>
    );
};
