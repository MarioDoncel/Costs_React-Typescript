import { NewProjectContainer } from './style';
import ProjectForm from '../../components/ProjectForm';




export const NewProject = () => {
  
  return (
    <NewProjectContainer>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm text='Criar Projeto' />
    </NewProjectContainer>
  );
}

