import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SubmitButtonContainer = styled.button`
    cursor: pointer;
    
    background-color: ${({theme})=> theme.color.black};
    color: ${({theme})=> theme.color.backgroundApp};
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: 500ms;
    :hover{
        color: ${({theme})=> theme.color.primary};
    }
`;
