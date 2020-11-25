import React from 'react';
import {Container, Contact, Info, DataType} from './styles'

const Footer = () => {
    return (
        <Container>
             <Contact>
                <DataType>Contact</DataType>
                <Info
                 target="_blank" 
                 rel="noopener noreferrer" 
                 href="mailto:julieta.eva.garcia@gmail.com"
                > julieta.eva.garcia@gmail.com</Info>
                <Info
                 target="_blank" 
                 rel="noopener noreferrer" 
                 href="tel:+54 9 11 7365 7252"
                >+54 (9) 11 7365-7252</Info>
            </Contact>
            <Contact>
                <DataType>Social</DataType>
                <Info  
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.linkedin.com/in/julieta-eva-garcia/">
                    Linkedin
                </Info>
                <Info 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://github.com/Julietteve"> 
                    Github
                </Info>
            </Contact>
        </Container>
    );
};

export default Footer;