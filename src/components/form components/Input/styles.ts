import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label{
      margin-bottom: .6rem;
      font-weight: bold;
  }
  input{
      padding: .7rem;
      border-radius: 4px;
      ::placeholder{
          color: ${({theme})=> theme.color.textLighter};
      }
  }
`;
