import React, { useEffect, useState } from 'react';
import { MenuItem as MuiMenuItem, ListItemText, Avatar } from '@mui/material';

import { IChatItemProps } from './IChatItemProps';

export const ChatItem: React.FC<IChatItemProps> = ({
  text,
  avatarSrc,
  onClick,
}) => {
  const [maxCharacters, setMaxCharacters] = useState(10);

  useEffect(() => {
    const updateMaxCharacters = () => {
      const newMaxCharacters = Math.floor(window.innerWidth / 150);
      setMaxCharacters(newMaxCharacters);
    };

    updateMaxCharacters();

    window.addEventListener('resize', updateMaxCharacters);

    return () => {
      window.removeEventListener('resize', updateMaxCharacters);
    };
  }, []);

  const truncatedText =
    text && text.length > maxCharacters
      ? text.substring(0, maxCharacters) + '...'
      : text;

  return (
    <MuiMenuItem onClick={onClick} sx={{ margin: '5px', borderRadius: '5px' }}>
      {avatarSrc && <Avatar src={avatarSrc} />}
      <ListItemText
        primary={truncatedText || ''}
        sx={{ margin: '5px', overflow: 'hidden', textOverflow: 'ellipsis' }}
      />
    </MuiMenuItem>
  );
};
