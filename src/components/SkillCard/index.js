import React from 'react';
import {Key, FlipCard, FlipCardInner, FlipCardBack,FlipCardFront, Animal,Kind, Description, Skill, Wrapper, Inner} from './styles';

const SkillCard = ({image, kind,description, skill, tools}) => {
    return (
        <FlipCard>
  <FlipCardInner>
    <FlipCardFront>
    <Animal src={image}></Animal>
    </FlipCardFront>
    <FlipCardBack>
      <Inner>
        <Kind>{kind}</Kind>
        <Description>{description}</Description>
        <Key>Keywords</Key>
        <Wrapper>
        {skill.map((item, index)=>(<Skill key={index}>{item}</Skill>))}
        {tools.map((item, index)=>(<Skill key={index}>{item}</Skill>))}
        </Wrapper>
      </Inner>
    </FlipCardBack>
  </FlipCardInner>
    </FlipCard>
            

    );
};

export default SkillCard;