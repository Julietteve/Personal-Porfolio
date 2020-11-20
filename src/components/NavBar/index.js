import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import{FiMail, FiCodesandbox} from 'react-icons/fi';
import {NavBarContainer,IconLink, NavIcon, RoutesContainer, AnchorsContainer, Container} from './styles';
 
    
const NavBar = () => {

    const currentLocation = window.location.pathname;
    const backgroundColor = currentLocation === "/" || currentLocation === "/skills" ? "ivory" : "black";
    const color = backgroundColor==="ivory" ? "#101010" : "ivory";
    const border = backgroundColor==="ivory" ? "#D1D1D1" : "#262626";

    return (
        <NavBarContainer background= {backgroundColor} color= {color} border={border}>
            <RoutesContainer>
                <Container>
                            <NavIcon exact to="/"  color= {color}>
                            Home
                            </NavIcon>
                </Container>
                <Container>
                            <NavIcon  to="/about"  color= {color}>
                            About
                            </NavIcon>
                </Container>
                <Container>
                            <NavIcon to="/skills"  color= {color}>
                            Skills
                            </NavIcon>
                    
                </Container>
                <Container>
                    
                            <NavIcon to="/works" color= {color}>
                            Works
                            </NavIcon>
                        
                </Container>
            </RoutesContainer>
            <AnchorsContainer>
                <IconLink 
                    color= {color}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.linkedin.com/in/julieta-eva-garcia/">
                    <FaLinkedinIn/>
                </IconLink>
                <IconLink
                    color= {color}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://github.com/Julietteve">
                    <FaGithub/>
                </IconLink>
                <IconLink
                    color= {color}
                    rel="noopener noreferrer" 
                    href="tel:+54 9 11 7365-7252">
                    <FiCodesandbox/>
                </IconLink>
                <IconLink
                    color= {color}
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