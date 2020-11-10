import React from 'react';
import {SkillCard} from '../../components'
import {Container, SkillsContainer, Skill} from './styles'

const Skills = () => {

    return (
      <Container>
               <SkillsContainer>    
                 <SkillCard/>
                 <SkillCard/>
                 <SkillCard/>
               </SkillsContainer>
        </Container>
    );
};

export default Skills;