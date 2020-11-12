import React, {useState}from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import{FiMail, FiPhone, FiCodesandbox} from 'react-icons/fi';
import {VscHome} from 'react-icons/vsc';
import {BsPerson, BsCodeSlash} from 'react-icons/bs';
import {AiOutlineTool} from 'react-icons/ai'
import {NavBarContainer,IconLink, NavIcon, OverLay, RoutesContainer, AnchorsContainer, Container, Icon, Name} from './styles';

const NavBar = () => {
    const [backgroundColor, changeColor] = useState("ivory");
    return (
        <NavBarContainer background= {backgroundColor} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
            <RoutesContainer>
                <Container>
                    <Icon>
                        <VscHome/>
                    </Icon>
                        <OverLay>
                            <NavIcon to="/" onClick={() => changeColor("ivory")} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
                            Home
                            </NavIcon>
                        </OverLay>
                </Container>
                <Container>
                    <Icon>
                        <BsPerson></BsPerson>
                    </Icon>
                        <OverLay>
                            <NavIcon to="/me" onClick={() => changeColor("#000")} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
                            Me
                            </NavIcon>
                        </OverLay>
                </Container>
                <Container>
                    <Icon>
                        <AiOutlineTool></AiOutlineTool>
                    </Icon>
                        <OverLay>
                            <NavIcon to="/skills" onClick={() => changeColor("ivory")} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
                            Skills
                            </NavIcon>
                        </OverLay>
                </Container>
                <Container>
                    <Icon>
                        <BsCodeSlash></BsCodeSlash>
                    </Icon>
                        <OverLay>
                            <NavIcon to="/works" onClick={() => changeColor("#000")} color= {backgroundColor==="ivory" ? "#101010" : "ivory"}>
                            Works
                            </NavIcon>
                        </OverLay>
                </Container>
            </RoutesContainer>
            <Name>
                    JG
            </Name>
            <AnchorsContainer>
                <IconLink 
                    color= {backgroundColor==="ivory" ? "#101010" : "ivory"}
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
                <IconLink
                    color= {backgroundColor==="ivory" ? "#101010" : "ivory"}
                    rel="noopener noreferrer" 
                    href="tel:+54 9 11 7365-7252">
                    <FiPhone/>
                </IconLink>
            </AnchorsContainer>
        </NavBarContainer>
    );
};

export default NavBar;