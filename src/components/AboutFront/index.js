import React from 'react';
import {Container, Quote, Info, ChangeButton, Button} from './styles';

const AboutFront = ({quote, onClick}) => {
    return (
        <Container>
            <Quote>{`' ${quote} '`}</Quote>
            <Info>Raised as an oldie films junkie, I always developed a strong attraction to the charming beauty of the world. That path leaded me to graduate from the University of Buenos Aires as a Multimedia Designer. While working on my tesis, someone showed me a piece of code on CSS, and that day my world became brighter. I found that magic I had been looking for, which would complement my professional desires. I trained in well-known code academies from Argentina and I chose my path on frontend development to combine my inner creative skills with my the recently adquried ones. Life had never been swetter since then.</Info>
            <Button>
            <ChangeButton onClick={onClick}> Read + quotes</ChangeButton>
            </Button>
        </Container>
    );
};

export default AboutFront;