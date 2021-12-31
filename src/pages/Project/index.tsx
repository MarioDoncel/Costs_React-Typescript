import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IState } from '..';
import Loading from '../../components/Loading';
import Message from '../../components/Message';
import ProjectForm, { IProject } from '../../components/ProjectForm';
import ServiceCard from '../../components/ServiceCard';
import ServiceForm, { IService } from '../../components/ServiceForm';
import { createService, deleteService, getOne, updateProject } from '../../services/db';

import { ProjectContainer } from './styles';

export const Project: React.FC = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const location = useLocation();
  const {type, message} = location.state as IState || {type:'', message:''}

  const [reload, setReload] = useState(false)
  const [visibleMessage, setVisibleMessage] = useState(false)
  const [project, setProject] = useState<IProject>()
  const [loading, setLoading] = useState(true)
  const [ShowProjectForm, setShowProjectForm] = useState(false)
  const [ShowServiceForm, setShowServiceForm] = useState(false)
  
  const toggleProjectForm = () =>setShowProjectForm(!ShowProjectForm)
  const toggleServiceForm = () =>setShowServiceForm(!ShowServiceForm)

  const editProject = async (projectData:IProject) => { 
    if(projectData?.cost >= 0 && (Number(projectData.budget) < Number(projectData.cost))) {
      navigate(`/projects/${id}`, {state: {type:'error', message:'Orçamento insuficiente para o projeto'}})
      setReload(!reload)
      return
    }
    projectData.id = id
    const projectUpdated = await updateProject(projectData)
    setProject(projectUpdated)
    setShowProjectForm(false)
    navigate(`/projects/${id}`, {state: {type:'success', message:'Projeto atualizado com sucesso'}})
    setReload(!reload)
  }

  const submitService = async (serviceData:IService) =>{
    let {name, cost, description}  = serviceData
    if(!name || !cost || !description ) {
      navigate(`/projects/${id}`, {state: {type:'error', message:'Preencha todos os campos'}})
      setReload(!reload)
      return
    }
    cost=Number(cost)
    if(project?.budget && (cost> (project?.budget - project.cost))) {
      navigate(`/projects/${id}`, {state: {type:'error', message:'Custo do serviço é superior ao orçamento disponivel'}})
      setReload(!reload)
      return
    }
    if(project?.services && project?.id){
      project.services.push(serviceData)
      await createService(project.services, project.id,(Number(project.cost)+Number(serviceData.cost)))
      
  }
    setShowServiceForm(false)
    navigate(`/projects/${project?.id}`, {state: {type:'success', message:'Serviço adicionado com sucesso'}})
    setReload(!reload)
  }
  const removeService =async (id:string, cost:number) =>{
    if(project?.services){
      const servicesFiltered = project.services.filter(service=> {
          if(service.id === id){
            project.cost = Number(project.cost) - Number(service.cost)
            return false
          }
          return true
        })
      await deleteService(project, servicesFiltered, project.cost)
      setShowServiceForm(false)
      navigate(`/projects/${project?.id}`, {state: {type:'success', message:'Serviço deletado com sucesso'}})
      setReload(!reload)
    }
  }

  useEffect(()=>{
    if(location.state) {
      setVisibleMessage(true)
      setTimeout(()=> setVisibleMessage(false),2500)}
  

    if(!id) return
    getOne('projects', id)
      .then(data=>{
        setProject(data)
        setTimeout(()=>setLoading(false),1500)
      })
      .catch((error)=>{
        console.warn(error)
        setLoading(false)
      })
  },[reload])
  return (
    <ProjectContainer>
      {visibleMessage && <Message type={type} message={message}/> }
      {loading ? <Loading /> : project?.name ?
        (
          <>
          <div>
            <h1> <span>Projeto:</span>  {project.name}</h1>
            <div className="btn">
              <button type='button' onClick={toggleProjectForm}>
                {ShowProjectForm?  'Fechar editor': 'Editar projeto'}
              </button>
            </div>
           
            {ShowProjectForm? (
                <div>
                  <ProjectForm text='Concluir edição' handleSubmit={editProject} projectData={project} />
                </div>
              ) : (
                <div className='details'>
                  <p><span>Categoria:</span>{project.category.name}</p>
                  <p><span>Total de Orçamento:</span>R$ {project.budget},00</p>
                  <p><span>Total utilizado:</span>R$  {project.cost},00</p>
                </div>
              )}
          </div>
          <hr />
          <div className="createService">
            <h2>Adicione um Serviço</h2>
            <div className="btn">
              <button type='button' onClick={toggleServiceForm}>
                {ShowServiceForm?  'Fechar': 'Adicionar serviço'}
              </button>
            </div>
            {ShowServiceForm && (
                <div>
                  <ServiceForm text='Adicionar' handleSubmit={submitService} projectData={project} />
                </div>
              )}
          </div>
          <hr />
            <h2>Serviços</h2>
            <div className="showServices">
              {project.services && (project.services?.length > 0) ?  
              project.services.map(service=> <ServiceCard 
                id={service.id} 
                name={service.name}
                cost={service.cost}
                description={service.description}
                handleRemove={removeService}/>) :
              <p>Não há serviços cadastrados</p> }
              
            </div>   
           
          </>
        ) :
          <h1>Projeto não encontrado...</h1>
      }
      
    </ProjectContainer>
  )
}

