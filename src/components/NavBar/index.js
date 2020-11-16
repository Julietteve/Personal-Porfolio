import React, {useState}from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import{FiMail, FiCodesandbox} from 'react-icons/fi';

import {NavBarContainer,IconLink, NavIcon, RoutesContainer, AnchorsContainer, Container} from './styles';

const NavBar = () => {
    const [backgroundColor, changeColor] = useState("ivory");
    return (
        <NavBarContainer background= {backgroundColor} color= {backgroundColor==="ivory" ? "#101010" : "ivory"} border={backgroundColor==="ivory" ? "#D1D1D1" : "#262626"}>
            <RoutesContainer>
                <Container>
                            <NavIcon exact to="/" onClick={() => changeColor("ivory")} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
                            Home
                            </NavIcon>
                </Container>
                <Container>
                            <NavIcon  to="/about" onClick={() => changeColor("#000")} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
                            About
                            </NavIcon>
                </Container>
                <Container>
                            <NavIcon to="/skills" onClick={() => changeColor("ivory")} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
                            Skills
                            </NavIcon>
                    
                </Container>
                <Container>
                    
                            <NavIcon to="/works" onClick={() => changeColor("#000")} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
                            Works
                            </NavIcon>
                        
                </Container>
            </RoutesContainer>
            <AnchorsContainer>
                <IconLink 
                    color= {backgroundColor==="ivory" ? "#101010" : "ivory"}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.linkedin.com/in/julieta-eva-garcia/">
                    <FaLinkedinIn/>
                </IconLink>
                <IconLink
                    color= {backgroundColor==="ivory" ? "#101010" : "ivory"}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://github.com/Julietteve">
                    <FaGithub/>
                </IconLink>
                <IconLink
                    color= {backgroundColor==="ivory" ? "#101010" : "ivory"}
                    rel="noopener noreferrer" 
                    href="tel:+54 9 11 7365-7252">
                    <FiCodesandbox/>
                </IconLink>
                <IconLink
                    color= {backgroundColor==="ivory" ? "#101010" : "ivory"}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="mailto:julieta.eva.garcia@gmail.com">
                    <FiMail/>
                </IconLink>
            </AnchorsContainer>
        </NavBarContainer>
    );
};

export default NavBar;