import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';


export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '30px',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: 'secondary.main',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
