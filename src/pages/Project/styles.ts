import styled from 'styled-components';

export const ProjectContainer = styled.div`
    
    width: 90vw;
    min-height:100%;
    flex: 1;
    
    padding: 1rem 0;

    >div{
        width: 90vw;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
       
        >*:not(img){
            flex: 0 0 50%;
        }
    }

    h1{
        background-color: ${({theme})=> theme.color.black};
        color: ${({theme})=> theme.color.primary};
        padding: .5rem;
        border-radius: 4px;
        margin-bottom: 0.5rem;
        span{
            color: #Efefef;
        }
    }
    
    .btn{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    button{
        
        cursor: pointer;
        background-color: ${({theme})=> theme.color.black};
        color: ${({theme})=> theme.color.backgroundApp};
        padding: 0.5rem 1rem;
        border-radius: 6px;
        transition: 500ms;
        :hover{
            color: ${({theme})=> theme.color.primary};
        }
    }
    .details {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        span{
            font-weight: bold;
        }
    }

    hr{
        margin:1rem 0;
        width: 100%;
        height: 1px;
        background-color: ${({theme})=> theme.color.black};
    }

    .showServices{
        display: flex;
        gap: 1rem;
    }
    
    
`;
