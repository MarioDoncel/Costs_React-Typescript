import { ContainerContainer } from './styles';

const Container:React.FC = ({children}) => {
     return (
        <ContainerContainer >
            {children}
        </ContainerContainer>
    )
}

export default Container;