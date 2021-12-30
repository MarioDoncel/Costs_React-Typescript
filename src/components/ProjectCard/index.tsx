import React from 'react';

import { ProjectCardContainer } from './styles';
import{BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

interface IProjectCard {
  id:number, 
  name:string,
  budget:number, 
  category:{
    id:number,
    name:string
  }, 
  handleRemove?:(e:MouseEvent)=>void
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
      <Link to='/' className='edit'><BsPencil/></Link>
      <button type='button'className='remove'><BsFillTrashFill/></button>
    </div>
  </ProjectCardContainer>
);
}

export default ProjectCard;