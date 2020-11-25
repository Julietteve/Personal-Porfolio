import React from 'react';
import {SkillCard, Footer} from '../../components';
import {skills} from './data';
import {Container, SkillsContainer,Skill, HoverLeft, HoverRight, Foot} from './styles'

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
                  <Foot>
               <Footer></Footer>
                  </Foot>
        </Container>
    );
};

export default Skills;