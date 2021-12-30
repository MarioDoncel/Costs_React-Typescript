import styled from 'styled-components';

export const HomeContainer = styled.section`
  margin: 0, auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

 
  span{
      padding: 0.2rem 0.5rem;
      background-color: #222;
      color: ${({theme})=> theme.color.primary};
  }
  p{
      color: ${({theme})=> theme.color.textLighter};
      overflow: hidden;
  }

  .image{
        display: flex;
        justify-content: center;
        max-width: 100%;
            img{
                max-width: 50%;
            }
}
`;
