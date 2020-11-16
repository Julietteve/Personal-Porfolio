import React from 'react';
import {SkillCard} from '../../components';
import {skills} from './data';
import {Container, SkillsContainer,DownloadContainer, Skill} from './styles'

const Skills = () => {

    return (
      <Container>
              <DownloadContainer>Hover on skill →</DownloadContainer>
               <SkillsContainer>  
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