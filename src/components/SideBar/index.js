import React, {useState}from 'react';
import {IconLink, Container, Icon, CloseIcon, Links, Social, NavIcon} from './styles';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import{FiMail, FiCodesandbox} from 'react-icons/fi';
import {MobileNav} from '../index'

const SideBar = ({isOpen,toggle}) => {

    const [background, setColor] = useState("ivory");
    

    return (
        <div>
            <MobileNav  toggle={toggle} color={background} iconColor={background==="black" ? "ivory" : "black"}/>
            <Container isOpen={isOpen} onClick={toggle}>
           <Icon>
               <CloseIcon onClick={toggle}/>
               </Icon>
               <Links>
                            <NavIcon exact to="/"  onClick={() => setColor("ivory")}>
                            Home
                            </NavIcon>
                            <NavIcon  to="/about" onClick={() => setColor("black")}>
                            About
                            </NavIcon>
                            <NavIcon to="/skills" onClick={() => setColor("ivory")} >
                            Skills
                            </NavIcon>
                            <NavIcon to="/works" onClick={() => setColor("black")}>
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
                    href="tel:+54 9 11 7365-7252">
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