import React from 'react';
import {NavBar} from '../../components/index';
import {MainContainer, Section } from './styles';

const Main = ({section}) => {
    return (
       <MainContainer>
           <NavBar></NavBar>
           <Section>
                {section}
           </Section>
       </MainContainer>
    );
};

export default Main;