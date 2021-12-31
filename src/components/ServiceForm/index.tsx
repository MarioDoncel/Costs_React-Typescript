import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from '../form components/Input';
import Select from '../form components/Select';
import SubmitButton from '../form components/SubmitButton';
import { ServiceFormContainer } from './styles';
import {getAll, createProject} from '../../services/db'
import { useNavigate } from 'react-router-dom';
import { IProject } from '../ProjectForm';
import { v4 as uuidv4, parse }from 'uuid'

interface IServiceForm{
    text:string;
    projectData?:IProject
    handleSubmit:(service:IService)=>Promise<void>
}

export interface IService {
    id:string
    name:string
    cost:number
    description:string
   
}

const ServiceForm = ({text,handleSubmit, projectData}:IServiceForm ) => {
    const defaultService = {
        id:uuidv4(),
        name:'',
        cost:0,
        description:''
    }
    
    const [service, setService] = useState<IService>(defaultService)

    
    const handleInputValue = (e:ChangeEvent) => {
        const input = e.target as HTMLInputElement
        setService((prevState)=>({...prevState,[input.name]:input.value}))
    }
    
    
    useEffect(()=>{
    },[])

  return (
    <ServiceFormContainer>
        <Input  type='text' label='Nome do Serviço' name='name' placeholder='Insira o nome do Serviço' 
                handleOnChange={handleInputValue} />
        <Input  type='number' label='Custo do Serviço' name='cost' placeholder='Insira o valor total' 
                handleOnChange={handleInputValue} />
        <Input  type='text' label='Descrição do Serviço' name='description' placeholder='Descreva o serviço' 
                handleOnChange={handleInputValue} />
        
        
        <SubmitButton onClick={()=> handleSubmit(service)} text={text}/>
        
       
    </ServiceFormContainer>
)
}

export default ServiceForm;