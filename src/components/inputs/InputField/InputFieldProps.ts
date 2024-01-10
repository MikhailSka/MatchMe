import { TextFieldProps } from '@mui/material';


export interface InputFieldProps extends Omit<TextFieldProps, 'name'> {
    name: string;
    control: any;
    rules?: Object;
  }
  