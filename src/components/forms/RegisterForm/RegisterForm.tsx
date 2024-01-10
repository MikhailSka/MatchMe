import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useStyles } from 'hooks/useStyles';
import { useRegisterForm } from './useRegisterForm';  
import { InputField } from 'components/inputs/InputField';
import { passwordValidation, emailValidation, standartValidation } from 'components/inputs/Validation';


export const RegisterForm: React.FC = () => {
  const { control, handleSubmit, watch, register, errors, onSubmit } = useRegisterForm(); 
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <Box className={classes.smBox}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <InputField 
          name="email" 
          label="Email Address"
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

        <InputField 
        name="repeatPassword" 
        label="Repeat Password" 
        type="password" 
        control={control} 
        required 
        fullWidth 
        margin="normal" 
        rules={{
            ...passwordValidation,
            validate: (value: string) => value === watch('password') || "Passwords don't match"
        }}
        />

        <InputField 
          name="firstName" 
          label="First Name" 
          type="firstName" 
          control={control} 
          required 
          fullWidth 
          margin="normal" 
          rules={standartValidation}
        />

        <InputField 
          name="lastName" 
          label="Last Name" 
          type="lastName" 
          control={control} 
          required 
          fullWidth 
          margin="normal" 
          rules={standartValidation}
        />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid item sx={{ textAlign: 'right' }}>
            <Link href="/login" variant="body2">
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

