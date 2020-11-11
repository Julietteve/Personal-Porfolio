import React from 'react';
import {SkillCard} from '../../components';
import {skills} from './data';
import {Container, SkillsContainer, Skill} from './styles'

const Skills = () => {

    return (
      <Container>
               <SkillsContainer>    
                 {
                   skills.map((item, index)=>(
                     <SkillCard
                      key={index}
                      skill={item.kind}
                      animal={item.image}
                      quote={`"${item.quote}"`}
                     />
                   ))
                 }
               </SkillsContainer>
        </Container>
    );
};

export default Skills;