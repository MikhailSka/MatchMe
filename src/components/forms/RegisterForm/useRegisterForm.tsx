import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface RegisterFormInputs {
  email: string;
  password: string;
  repeatPassword: string;
}

export const useRegisterForm = () => {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    watch,  // <-- Import this
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      const response = await axios.post('URL/register', data);
      console.log(response.data); 
      console.log("register");
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return { control, handleSubmit, register, errors, onSubmit, watch };
}
