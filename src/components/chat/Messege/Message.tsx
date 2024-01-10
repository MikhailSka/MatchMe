import React from 'react';
import { Paper, Typography } from '@mui/material';

import { IMessageProps } from './IMessageProps';


export const Message: React.FC<IMessageProps> = ({ message }) => {
  const align = message.isCurrentUser ? 'right' : 'left';

  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: '80%',
        margin: '10px',
        padding: '10px',
        alignSelf: align,
        backgroundColor: message.isCurrentUser ? '#DCF8C6' : '#F3F3F3',
      }}
    >
      <Typography>{message.text}</Typography>
      <Typography variant="caption" color="textSecondary">
        {message.datetime}
      </Typography>
    </Paper>
  );
};
