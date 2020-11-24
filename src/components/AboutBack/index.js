import React from 'react';
import {Container,Info, Line, Love} from './styles';
import {Intro, Education} from './data';

const AboutBack = () => {

    return (
        <Container>
            <Love>Yeah, I love inspirational quotes.</Love>
            <Line></Line>
            <Info>{Intro}</Info>
            <Info>{Education}</Info>
        </Container>
    );
};

export default AboutBack;