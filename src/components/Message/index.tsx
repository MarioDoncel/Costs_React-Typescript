import React from 'react';

import { MessageContainer } from './styles';

interface IMessage {
    type:string;
    message:string;
}

const Message = ({type, message}:IMessage) => {
  
  return (
  <MessageContainer className={type} >
      {message}
  </MessageContainer>
);
}

export default Message;