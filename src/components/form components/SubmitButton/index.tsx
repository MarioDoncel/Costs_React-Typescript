import React, { ButtonHTMLAttributes } from 'react';

import { SubmitButtonContainer } from './styles';
interface ISubmitButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text:string;
}

const SubmitButton = ({onClick, text}:ISubmitButton) => {
  return (
    <SubmitButtonContainer onClick={onClick} type='button' >
        {text}
    </SubmitButtonContainer>
    );
}

export default SubmitButton;