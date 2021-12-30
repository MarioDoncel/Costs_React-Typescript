import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
    return (
			<HeaderContainer>
				<img src={logo} alt="logo" />
				<nav>
					<Link to="/">Home</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/company">Company</Link>
					<Link to="/contact">Contact</Link>
				</nav>


			</HeaderContainer>
    )
}

export default Header;