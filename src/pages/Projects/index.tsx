import { ProjectsContainer } from './style';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Message from '../../components/Message';
import { useEffect, useState } from 'react';
import LinkButton from '../../components/LinkButton';
import { deleteProject, getAll } from '../../services/db';
import ProjectCard, { IProjectCard } from '../../components/ProjectCard';
import Loading from '../../components/Loading';

export interface IState  {
  type:string;
  message:string
}

export const Projects:React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const {type, message} = location.state as IState || {type:'', message:''}

  const [reload, setReload] = useState(false)
  const [visibleMessage, setVisibleMessage] = useState(false)
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<IProjectCard[]>([])

  const handleRemove =(id:number) =>{
    deleteProject(id)
      .then(async ()=> setProjects(projects.filter(project=>project.id !== id)))
      .then(()=>{
        navigate('/projects', {state: {type:'success', message:'Projeto deletado com sucesso'}})
        setReload(!reload)
    })
  }

useEffect(()=>{
  if(location.state) {
    setVisibleMessage(true)
    setTimeout(()=> setVisibleMessage(false),2500)}

    getAll('projects').then(data=>{
      setProjects(data)
      setTimeout(()=>setLoading(false),1500)
    })
},[reload])
  return (
    <ProjectsContainer>
      
      <div className="header">
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto'/>
      </div>
      {visibleMessage && <Message type={type} message={message}/> }
      <div className="projects">
        {loading? <Loading/> : 
          projects.length > 0 ? 
            projects.map(({id, name, budget, category }) => (
              <ProjectCard key={id} id={id} name={name} budget={budget} category={category} handleRemove={handleRemove} />)) :
                <p>Não há projetos no momento...</p>
        } 
      </div>
      
    </ProjectsContainer>
  );
}

