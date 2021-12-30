import React, { ChangeEvent } from 'react';

import { InputContainer } from './styles';

interface IInput{
    type:string;
    label:string;
    name:string;
    placeholder:string;
    handleOnChange:(e:ChangeEvent)=>void;
    value?:string;

}

const Input = ({type='text', label, name, placeholder, handleOnChange, value}:IInput) => {
  return (
        <InputContainer>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={value}/>
        </InputContainer>
    )
}

export default Input;