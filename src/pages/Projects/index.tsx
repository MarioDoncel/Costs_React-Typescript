import { ProjectsContainer } from './style';
import { useLocation } from 'react-router-dom';
import Message from '../../components/Message';
import { useEffect, useState } from 'react';
import LinkButton from '../../components/LinkButton';
import { getData } from '../../services/db';
import ProjectCard from '../../components/ProjectCard';

interface IState  {
  type:string;
  message:string
}

export const Projects:React.FC = () => {
  const location = useLocation();
  const {type, message} = location.state as IState || {type:'', message:''}
  const [visible, setVisible] = useState(false)
  const [projects, setProjects] = useState([])

useEffect(()=>{
  if(location.state) {
    setVisible(true)
    setTimeout(()=> setVisible(false),4000)}

    getData('projects').then(data=>setProjects(data))
},[])
  return (
    <ProjectsContainer>
      
      <div className="header">
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto'/>
      </div>
      {visible && <Message type={type} message={message}/> }
      <div className="projects">
        {projects.length > 0 && 
        projects.map(({id, name, budget, category }) => (
          <ProjectCard key={id} id={id} name={name} budget={budget} category={category} />
        ))}
      </div>
      
    </ProjectsContainer>
  );
}

