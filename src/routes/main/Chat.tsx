import React , {useState} from 'react';
import { Box, Grid } from '@mui/material';

import { ChatItem } from 'components/chat/ChatItem';
import { useStyles } from 'hooks/useStyles';
import { ChatInput } from 'components/chat/ChatInput';
import { IMessage } from 'components/chat/Messege/IMessageProps';
import { Message } from 'components/chat/Messege';

const messages: IMessage[] = [
  {
    text: "Hello!",
    datetime: "2023-08-20T10:00:00",
    isCurrentUser: false,
  },
  {
    text: "Hi there!",
    datetime: "2023-08-20T10:05:00",
    isCurrentUser: true,
  },
  // Add more messages here
];

const userList = [
  { id: 1, name: 'Elon Musk', avatarSrc: 'user1.jpg' },
  { id: 2, name: 'Filip Ruin', avatarSrc: 'user2.jpg' },
  { id: 3, name: 'Хьюберт Блейн Вольфшлегельштайнхаузенбергедорф', avatarSrc: 'user3.jpg' },
  { id: 1, name: 'Elon Musk', avatarSrc: 'user1.jpg' },
  { id: 2, name: 'Filip Ruin', avatarSrc: 'user2.jpg' },
  { id: 3, name: 'Хьюберт Блейн Вольфшлегельштайнхаузенбергедорф', avatarSrc: 'user3.jpg' },
  { id: 1, name: 'Elon Musk', avatarSrc: 'user1.jpg' },
  { id: 2, name: 'Filip Ruin', avatarSrc: 'user2.jpg' },
  { id: 3, name: 'Хьюберт Блейн Вольфшлегельштайнхаузенбергедорф', avatarSrc: 'user3.jpg' },
  { id: 1, name: 'Elon Musk', avatarSrc: 'user1.jpg' },
  { id: 2, name: 'Filip Ruin', avatarSrc: 'user2.jpg' },
  { id: 3, name: 'Хьюберт Блейн Вольфшлегельштайнхаузенбергедорф', avatarSrc: 'user3.jpg' },
  { id: 1, name: 'Elon Musk', avatarSrc: 'user1.jpg' },
  { id: 2, name: 'Filip Ruin', avatarSrc: 'user2.jpg' },
  { id: 3, name: 'Хьюберт Блейн Вольфшлегельштайнхаузенбергедорф', avatarSrc: 'user3.jpg' },
  { id: 1, name: 'Elon Musk', avatarSrc: 'user1.jpg' },
  { id: 2, name: 'Filip Ruin', avatarSrc: 'user2.jpg' },
  { id: 3, name: 'Хьюберт Блейн Вольфшлегельштайнхаузенбергедорф', avatarSrc: 'user3.jpg' },
  { id: 1, name: 'Elon Musk', avatarSrc: 'user1.jpg' },
  { id: 2, name: 'Filip Ruin', avatarSrc: 'user2.jpg' },
  { id: 3, name: 'Хьюберт Блейн Вольфшлегельштайнхаузенбергедорф', avatarSrc: 'user3.jpg' },
  { id: 1, name: 'Elon Musk', avatarSrc: 'user1.jpg' },
  { id: 2, name: 'Filip Ruin', avatarSrc: 'user2.jpg' },
  { id: 3, name: 'Хьюберт Блейн Вольфшлегельштайнхаузенбергедорф', avatarSrc: 'user3.jpg' },
  // ... more users
];

const Chat: React.FC = () => {
  const classes = useStyles();
  const [messageList, setMessageList] = useState<IMessage[]>(messages);

  const handleSendMessage = (text: string) => {
    const newMessage: IMessage = {
      text,
      datetime: new Date().toISOString(),
      isCurrentUser: true,
    };
    setMessageList([...messageList, newMessage]);
  };
  return (
    <Box className={classes.xlBox}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box className={classes.chat}>
            {userList.map((user) => (
              <ChatItem
                key={user.id}
                text={user.name}
                avatarSrc={user.avatarSrc}
                onClick={() => console.log('click')}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={10}>
        <div style={{ width: '80%', maxHeight: '80vh', overflowY: 'auto' }}>
        {messageList.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
