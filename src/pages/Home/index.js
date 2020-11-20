import React from 'react';
import {Container, Info, Artemisa, Slogan, Box, Me, Scroll, Circle} from './styles';
import {intro} from './data';
import cv from "./Julieta-Garcia CV-2020.pdf";

const Home = () => {    

    return (
        <Container>
            <Box>
                <Slogan>Because the outside also matters.</Slogan>
                <Scroll>
                    <Info>{intro}</Info>
                </Scroll>
                <Me 
                target="_blank" 
                rel="noopener noreferrer" 
                href={cv}
                download
                >
                Download CV
                </Me>
            </Box>
            <Circle src="images/circle.png"></Circle>
            <Artemisa src="images/artemisa.png"/>
        </Container>


    );
};

export default Home;