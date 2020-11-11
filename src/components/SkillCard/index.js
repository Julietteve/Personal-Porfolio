import React from 'react';
import {FlipCard, FlipCardInner, FlipCardBack,FlipCardFront, Skill, Animal, Quote} from './styles';

const SkillCard = ({skill,animal,quote}) => {
    return (
        <FlipCard>
  <FlipCardInner>
    <FlipCardFront>
    <Skill>{skill}</Skill>
    <Animal src={animal}></Animal>
    <Quote>{quote}</Quote>
    </FlipCardFront>
    <FlipCardBack>
      <h1>John Doe</h1> 
      <p>Architect Engineer</p> 
      <p>We love that guy</p>
    </FlipCardBack>
  </FlipCardInner>
    </FlipCard>
            

    );
};

export default SkillCard;