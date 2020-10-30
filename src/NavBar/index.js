import React from 'react';
import {NavBarContainer,IconLink} from './styles';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import{FiMail, FiPhone} from 'react-icons/fi'

const NavBar = () => {
    return (
        <NavBarContainer>
            <IconLink 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/julieta-eva-garcia/">
                <FaLinkedinIn/>
            </IconLink>
            <IconLink
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://github.com/Julietteve">
                <FaGithub/>
            </IconLink>
            <IconLink
              target="_blank" 
              rel="noopener noreferrer" 
              href="mailto:julieta.eva.garcia@gmail.com">
                <FiMail/>
            </IconLink>
            <IconLink
               rel="noopener noreferrer" 
               href="tel:+54 9 11 7365-7252">
                <FiPhone/>
            </IconLink>
            
        </NavBarContainer>
    );
};

export default NavBar;