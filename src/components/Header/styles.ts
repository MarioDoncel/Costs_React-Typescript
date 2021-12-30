import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
		background-color: ${({theme})=> theme.color.black};

    padding: 1rem 5%;

    display: flex;
		align-items: center;
		justify-content: space-between;

		nav{
			display: flex;
			gap: 1rem;
		}

		a{
			color: white;
			transition: 400ms;
			:hover{
				color:${({theme})=> theme.color.primary}
			}
		}
`;
