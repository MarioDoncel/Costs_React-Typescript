import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { FooterContainer } from './styles';

const Footer: React.FC = () => {
     return (
        <FooterContainer>
            <div className='social'>
                <FaWhatsapp />
                <FaFacebook />
                <FaInstagram />
            </div>
            <p><span>Costs</span>&copy;2021</p>
        </FooterContainer>
    )
}

export default Footer;