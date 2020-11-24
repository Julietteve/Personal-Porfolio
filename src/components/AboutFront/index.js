import React from 'react';
import {Container, Quote, ChangeButton, Button, Author, Love} from './styles';

const AboutFront = ({quote, onClick, author}) => {
    return (
        <Container>
            <Quote>{`" ${quote} "  ━`}</Quote>
            <Author>{author}</Author>
            <Button>
            <ChangeButton onClick={onClick}> + quotes</ChangeButton>
            </Button>
        </Container>
    );
};

export default AboutFront;