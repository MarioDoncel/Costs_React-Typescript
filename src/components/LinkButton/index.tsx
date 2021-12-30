import React from 'react';

import { LinkButtonContainer } from './styles';
interface ILinkButton {
    to:string;
    text:string;
}

const LinkButton = ({to, text}:ILinkButton) => {
  return (
    <LinkButtonContainer to={to}>
        {text}
    </LinkButtonContainer>
    );
}

export default LinkButton;