import React, {useState} from 'react';
import {SkillCard} from '../../components';
import {skills} from './data';
import {Container, SkillsContainer,DownloadContainer, Skill, Description} from './styles'

const Skills = () => {

    return (
      <Container>
              <DownloadContainer>Hover on skill</DownloadContainer>
               <SkillsContainer>  
                 <Skill>
                 {
                   skills.map((item, index)=>(
                     <SkillCard
                      key={index}
                      image={item.image}
                      kind={item.kind}
                      description={item.description}
                     />
                   ))
                 }
                   </Skill>  
               </SkillsContainer>
        </Container>
    );
};

export default Skills;