import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from '../form components/Input';
import Select from '../form components/Select';
import SubmitButton from '../form components/SubmitButton';
import { ProjectFormContainer } from './styles';
import {getData, createProject} from '../../services/db'
import { useNavigate } from 'react-router-dom';

interface IProjectForm{
    text:string;
}

type TCategory = {
    id:number;
    name:string;
}
export interface IProject {
    name:string
    budget:number
    category:TCategory
    cost:number
    services:never[]
}

const defaultProject = {
    name:'',
    budget:0,
    category:{
        id:0,
        name:''
    },
    cost:0,
    services:[]
}


const ProjectForm = ({text}:IProjectForm) => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
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

    const handleClickSubmitButton = async () => {
        let {name, budget, category:{id, name:categoryName}}  = project
        if(!name || !budget || !id || !categoryName) return
        id=Number(id)
        budget=Number(budget)
        await createProject(project)
        navigate('/projects', {state: {type:'success', message:'Projeto criado com sucesso'}})
    }
    
    useEffect(()=>{
        getData('categories').then(data=>setCategories(data))
    },[])

  return (
    <ProjectFormContainer>
        <Input  type='text' label='Nome do Projeto' name='name' placeholder='Insira o nome do Projeto' 
                handleOnChange={handleInputValue}/>
        <Input  type='number' label='Orçamento do Projeto' name='budget' placeholder='Insira o orçamento total' 
                handleOnChange={handleInputValue}/>
        <Select label='Categoria do Projeto' name='category' handleOnChange={handleSelectValue} 
        options={categories}/>
        
        <SubmitButton onClick={handleClickSubmitButton} text={text}/>
        
       
    </ProjectFormContainer>
)
}

export default ProjectForm;