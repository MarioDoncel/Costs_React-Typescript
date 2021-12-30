import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label{
      margin-bottom: .6rem;
      font-weight: bold;
  }
  select{
      padding: .7rem;
      border-radius: 4px;
  }
  option{
    padding: 0.7rem;
    border-radius: 0;
  }
`;
