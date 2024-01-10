import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useStyles } from 'hooks/useStyles';
import { useLoginForm } from './useLoginForm';
import { InputField } from 'components/inputs/InputField';
import { passwordValidation, emailValidation } from 'components/inputs/Validation';


export const LoginForm: React.FC = () => {
  const { control, handleSubmit, register, errors, onSubmit } = useLoginForm()
  const classes = useStyles(); 
  return (
    <Container component="main" maxWidth="sm">
      <Box className={classes.smBox}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <InputField 
          name="username" 
          label="Email" 
          control={control} 
          required 
          fullWidth 
          margin="normal"
          rules={emailValidation} 
        />

        <InputField 
          name="password" 
          label="Password" 
          type="password" 
          control={control} 
          required 
          fullWidth 
          margin="normal" 
          rules={passwordValidation}
        />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
          <Grid item sx={{ textAlign: 'right' }}>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};