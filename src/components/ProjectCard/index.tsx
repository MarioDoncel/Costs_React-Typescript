import React, { MouseEventHandler } from 'react';

import { ProjectCardContainer } from './styles';
import{BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';


export interface IProjectCard {
  id:number, 
  name:string,
  budget:number, 
  category:{
    id:number,
    name:string
  }, 
  handleRemove:( id:number)=>void
}

const ProjectCard = ({id, name,budget, category, handleRemove}:IProjectCard) => {

  

  return (
  <ProjectCardContainer>
    <div className="title">
      <h3>{name}</h3>
      <hr />
    </div>
    <div >
      <span className='budget'>Orçamento: </span><p>{`R$ ${budget},00`} </p>
    </div>
    <p className={`category ${category.name.toLocaleLowerCase()}`}><span ></span>{category.name}</p>
    <div className="actions">
      <Link to={`/projects/${id}`} className='edit'><BsPencil/></Link>
      <button type='button'className='remove' onClick={()=>handleRemove(id)}><BsFillTrashFill/></button>
    </div>
  </ProjectCardContainer>
);
}

export default ProjectCard;