import React from 'react';
import {IconLink, Container, Icon, CloseIcon, Links, Social, NavIcon} from './styles';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import{FiMail, FiCodesandbox} from 'react-icons/fi';
import {MobileNav} from '../index'

const SideBar = ({isOpen,toggle}) => {

    const currentLocation = window.location.pathname;
    const backgroundColor = currentLocation === "/" || currentLocation === "/skills" ? "white" : "black";
    const iconColor= backgroundColor === "white" ? "black" : "white";

    return (
        <div>
            <MobileNav  toggle={toggle} color={backgroundColor} iconColor={iconColor}/>
            <Container isOpen={isOpen} onClick={toggle}>
           <Icon>
               <CloseIcon onClick={toggle}/>
               </Icon>
               <Links>
                            <NavIcon exact to="/">
                            Home
                            </NavIcon>
                            <NavIcon  to="/about">
                            About
                            </NavIcon>
                            <NavIcon to="/skills">
                            Skills
                            </NavIcon>
                            <NavIcon to="/works">
                            Works
                            </NavIcon>
               </Links>
               <Social>
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
                    href="https://codesandbox.io/u/Julietteve/sandboxes">
                    <FiCodesandbox/>
                </IconLink>
                <IconLink
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="mailto:julieta.eva.garcia@gmail.com">
                    <FiMail/>
                </IconLink>
               </Social>
       </Container>
        </div>
    );
};

export default SideBar;