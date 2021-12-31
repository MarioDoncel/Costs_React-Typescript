import React, { MouseEventHandler } from 'react';

import { ServiceCardContainer } from './styles';
import{BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';


export interface IServiceCard {
  id:string, 
  name:string,
  cost:number, 
  description:string,
  handleRemove:( id:string, cost:number)=>void
}

const ServiceCard = ({id, name,cost, description, handleRemove}:IServiceCard) => {

  

  return (
  <ServiceCardContainer>
    <div className="title">
      <h4>{name}</h4>
      <hr />
    </div>
    <div className="information">
      <p> <span className='cost'>Custo: </span>{`R$ ${cost} ,00`} </p>
      <p className='description'><span>Descrição:</span>{description}</p>
    </div>
    <div className="actions">
      <button type='button'className='remove' onClick={()=>handleRemove(id, Number(cost))}><BsFillTrashFill/></button>
    </div>
  </ServiceCardContainer>
);
}

export default ServiceCard;