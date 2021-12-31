import styled from 'styled-components';

export const ServiceCardContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem 1rem;
    border: 1px solid ${({theme})=> theme.color.black};
    border-radius: 8px;
    flex: initial !important;
    width: 300px;
    height: 275px;
    margin-top: 1rem;
    
    

    .title{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    h4{
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
        margin-top: 0;
    }
    span{
        font-weight: bold;
        color:${({theme})=> theme.color.black}
    }
    .information{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex: 1;
        p{
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
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
        background-color: initial;
    }

    @media (max-width:600px){
        width: 160px;
        height: 200px;
    }
`;
