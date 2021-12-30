
import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 300px;
  padding: 1rem;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  position: absolute;
  top: 25px;
  right: 0;
  left: 0;
  margin: 0 auto;


  &.success{
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cB
  }

  &.error{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb
  }
`;
