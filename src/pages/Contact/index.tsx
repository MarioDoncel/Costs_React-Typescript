import { ContactContainer } from './style';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";



export const Contact = () => {
  
  return (
    <ContactContainer>
      <h2>Page2</h2>
      <Link to='/'> <FiArrowRightCircle className='icon'/>Link to page 1 </Link>
    </ContactContainer>
  );
}

