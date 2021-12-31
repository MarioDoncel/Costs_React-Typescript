import { NewProjectContainer } from './style';
import ProjectForm, { IProject } from '../../components/ProjectForm';
import { createProject } from '../../services/db';
import { useNavigate } from 'react-router-dom';




export const NewProject = () => {
  const navigate = useNavigate()
  
  const handleClickSubmitButton = async (project:IProject) => {
    let {name, budget, category:{id, name:categoryName}}  = project
    if(!name || !budget || !id || !categoryName) return
    id=Number(id)
    budget=Number(budget)
    await createProject({...project,cost:0,services:[]})
    navigate('/projects', {state: {type:'success', message:'Projeto criado com sucesso'}})
}

  return (
    <NewProjectContainer>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm text='Criar Projeto' handleSubmit={handleClickSubmitButton}/>
    </NewProjectContainer>
  );
}

