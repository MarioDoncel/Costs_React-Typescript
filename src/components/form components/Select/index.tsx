import { type } from 'os';
import React, { ChangeEvent } from 'react';

import { SelectContainer } from './styles';

type TOptions = {
    id:number;
    name:string;
}

interface ISelect{
    label:string;
    name:string;
    options:TOptions[];
    handleOnChange:(e:ChangeEvent)=>void;
    value?:string;

}

const Select = ({ label, name, options, handleOnChange, value}:ISelect) => {
  return (
        <SelectContainer>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={handleOnChange} defaultValue='Selecione uma opção' >
                <option disabled >Selecione uma opção</option>
                {options.length > 0 && options.map(option=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </SelectContainer>
)
}

export default Select;