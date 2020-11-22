import React from 'react';
import {Container, About} from './styles';

const AboutBack = () => {
    
    let about= [];
    for(let i=0; i<22; i++){
        about.push("about. ");
    }

    return (
        <Container>
            <About>{about}</About>
        </Container>
    );
};

export default AboutBack;