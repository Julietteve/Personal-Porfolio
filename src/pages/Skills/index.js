import React from 'react';
import {SkillCard} from '../../components';
import {skills} from './data';
import {Container, SkillsContainer,Skill, HoverLeft, HoverRight} from './styles'

const Skills = () => {

    return (
      <Container>
               <SkillsContainer>
                 <HoverLeft> hover on me ━</HoverLeft>
                 <HoverRight> hover on me ━</HoverRight>
                 <Skill>
                 {
                   skills.map((item, index)=>(
                     <SkillCard
                      key={index}
                      image={item.image}
                      kind={item.kind}
                      description={item.description}
                      skill={item.skill}
                      tools={item.tools}
                     />
                   ))
                 }
                   </Skill>  
               </SkillsContainer>
        </Container>
    );
};

export default Skills;