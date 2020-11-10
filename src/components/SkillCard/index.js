import React from 'react';
import {FlipCard, FlipCardInner, FlipCardBack,FlipCardFront} from './styles';

const SkillCard = () => {
    return (
        <FlipCard>
  <FlipCardInner>
    <FlipCardFront>
      <p>hola</p>
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