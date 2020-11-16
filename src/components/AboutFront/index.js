import React from 'react';
import {Container, Quote, Info, ChangeButton, Button, Author} from './styles';
import {Intro} from './data';

const AboutFront = ({quote, onClick, author}) => {
    return (
        <Container>
            <Quote>{`'${quote}'`}</Quote>
            <Author>{author}</Author>
                <Info>{Intro}</Info>
            <Button>
            <ChangeButton onClick={onClick}> + quotes</ChangeButton>
            </Button>
        </Container>
    );
};

export default AboutFront;