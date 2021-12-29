import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
     return (
        <HeaderContainer>
            <ul>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li> 
                    <Link to="/company">Company</Link> 
                </li>
                <li> 
                    <Link to="contact">Contact</Link> 
                </li>
                <li>
                    <Link to="newproject">New Project</Link> 
                </li>
            </ul>
        </HeaderContainer>
    )
}

export default Header;