import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import{FiMail, FiPhone} from 'react-icons/fi';
import {VscHome} from 'react-icons/vsc';
import {BsPerson, BsCodeSlash} from 'react-icons/bs';
import {AiOutlineTool} from 'react-icons/ai'
import {NavBarContainer,IconLink, NavIcon, OverLay, RoutesContainer, AnchorsContainer, Container, Icon} from './styles';
import { Route } from 'react-router-dom';

const NavBar = () => {
    return (
        <NavBarContainer>

            <RoutesContainer>
                <Container>
                    <Icon>
                        <VscHome/>
                    </Icon>
                        <OverLay>
                            <NavIcon to="/home">
                            Home
                            </NavIcon>
                        </OverLay>
                </Container>
                <Container>
                    <Icon>
                        <BsPerson></BsPerson>
                    </Icon>
                        <OverLay>
                            <NavIcon to="/me">
                            Me
                            </NavIcon>
                        </OverLay>
                </Container>
                <Container>
                    <Icon>
                        <AiOutlineTool></AiOutlineTool>
                    </Icon>
                        <OverLay>
                            <NavIcon to="/skills">
                            Skills
                            </NavIcon>
                        </OverLay>
                </Container>
                <Container>
                    <Icon>
                        <BsCodeSlash></BsCodeSlash>
                    </Icon>
                        <OverLay>
                            <NavIcon to="/works">
                            Works
                            </NavIcon>
                        </OverLay>
                </Container>
            </RoutesContainer>
            <AnchorsContainer>
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
            </AnchorsContainer>
        </NavBarContainer>
    );
};

export default NavBar;