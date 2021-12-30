import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: auto;
    padding:  .5rem 2rem;
    width: 100vw;
    background-color: ${({theme})=> theme.color.black};
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .social {
        display: flex;
        gap: 6rem;
        margin-bottom: 0.7rem;
        font-size: 1.5rem;
    }
    p{
        font-size: 0.8rem;
    }
    span{
        color:${({theme})=> theme.color.primary} ;
    }
`;
