import React from 'react';
import {FlipCard, FlipCardInner, FlipCardBack,FlipCardFront, Animal,Kind, Description} from './styles';

const SkillCard = ({image, kind,description}) => {
    return (
        <FlipCard>
  <FlipCardInner>
    <FlipCardFront>
    <Animal src={image}></Animal>
    </FlipCardFront>
    <FlipCardBack>
    <Kind>{kind}</Kind>
    <Description>{description}</Description>
    </FlipCardBack>
  </FlipCardInner>
    </FlipCard>
            

    );
};

export default SkillCard;