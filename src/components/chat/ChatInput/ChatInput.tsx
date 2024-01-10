import React from 'react';
import { TextField } from '@mui/material';

import { IChatInputProps } from './IChatInputProps';


export const ChatInput: React.FC<IChatInputProps> = ({ onSendMessage }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && event.currentTarget.value.trim() !== '') {
        onSendMessage(event.currentTarget.value);
        event.currentTarget.value = '';
      }
    };
  
    return (
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        onKeyDown={handleKeyDown}
      />
    );
  };
  