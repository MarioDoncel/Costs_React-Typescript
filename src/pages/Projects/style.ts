import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 90vw;
  min-height:100%;
  flex: 1;
  
  padding: 1rem 0;
  
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  .projects{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
