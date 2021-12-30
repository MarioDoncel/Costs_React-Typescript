
import { HomeContainer } from './style';
import savings from '../../assets/savings.svg'
import LinkButton from '../../components/LinkButton';
 
export const Home: React.FC = () => {
  


  return (
    <HomeContainer>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to='/newproject' text='Criar Projeto' />
      
      
      <div className="image">
         <img src={savings} alt="savings" />
      </div>
    </HomeContainer>


  );
}

