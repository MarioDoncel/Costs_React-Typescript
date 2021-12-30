import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    border: 1px solid ${({theme})=> theme.color.black};
    border-radius: 8px;
    width: 225px;
    height: 300px;


    .title{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    h3{
        display: block;
        width: 100%;
        background-color:${({theme})=> theme.color.black};
        color:${({theme})=> theme.color.primary};
        padding: .4rem;
        text-align: center;
        border-radius: 8px;
        text-transform: capitalize;

    }
    hr{
        width: 100%;
        height: 1px;
        background-color: black;
    }

    p {
        color:${({theme})=> theme.color.textLighter};
    }
    span.budget{
        font-weight: bold;
    }

    p.category span{
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${({theme})=> theme.color.black};
        margin-right: .4rem;
    }

    .category{
        padding: .2rem .6rem;
        border-radius: 6px;
    }

    .infraestrutura{
        background-color: #FFaebc;
    }
    .desenvolvimento{
        background-color: #a0e7e5;
    }
    
    .design{
        background-color: #b4f8c8;
    }
    
    .planejamento{
        background-color: #fbe7c6;

    }

    .actions{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }

    .remove{
        color: red;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .edit{
        color: blue;
        font-size: 1.2rem;
    }
`;
