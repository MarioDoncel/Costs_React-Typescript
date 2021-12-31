import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from '../form components/Input';
import Select from '../form components/Select';
import SubmitButton from '../form components/SubmitButton';
import { ProjectFormContainer } from './styles';
import {getAll} from '../../services/db'
import { IService } from '../ServiceForm';

interface IProjectForm{
    text:string;
    projectData?:IProject
    handleSubmit:(project:IProject)=>Promise<void>
}

type TCategory = {
    id:number;
    name:string;
}
export interface IProject {
    id?:string
    name:string
    budget:number
    category:TCategory
    cost:number
    services?:IService[]
}



const ProjectForm = ({text,handleSubmit, projectData}:IProjectForm ) => {
    const [categories, setCategories] = useState([])
    const defaultProject = {
        name: projectData?.name || '',
        budget:projectData?.budget || 0,
        category:{
            id:projectData?.category.id || 0,
            name:projectData?.category.name || ''
        },
        cost:projectData?.cost || 0,
        services:projectData?.services || []
    }
    
    const [project, setProject] = useState<IProject>(defaultProject)

    
    const handleInputValue = (e:ChangeEvent) => {
        const input = e.target as HTMLInputElement
        setProject((prevState)=>({...prevState,[input.name]:input.value}))
    }
    const handleSelectValue = async (e:ChangeEvent) => {
        const select = e.target as HTMLSelectElement
        const newProject:any = {}
        newProject.category = {
            id:select.value,
            name:select.options[Number(select.value)].text
        }
        setProject((prevState)=>({...prevState,  category:{
            id:Number(select.value),
            name:select.options[Number(select.value)].text
        }}))
    }
    
    useEffect(()=>{
        getAll('categories').then(data=>setCategories(data))
    },[])

  return (
    <ProjectFormContainer>
        <Input  type='text' label='Nome do Projeto' name='name' placeholder='Insira o nome do Projeto' 
                handleOnChange={handleInputValue} value={projectData?.name}/>
        <Input  type='number' label='Orçamento do Projeto' name='budget' placeholder='Insira o orçamento total' 
                handleOnChange={handleInputValue} value={projectData?.budget.toString()}/>
        <Select label='Categoria do Projeto' name='category' handleOnChange={handleSelectValue} 
        options={categories} value={projectData?.category.id.toString()}/>
        
        <SubmitButton onClick={()=> handleSubmit(project)} text={text}/>
        
       
    </ProjectFormContainer>
)
}

export default ProjectForm;