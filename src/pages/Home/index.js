import React from 'react';
import {Container, Info, Artemisa, Slogan, Box, Me, Scroll, Circle} from './styles';
import {intro} from './data';
import whales from "../../whales.jpg";

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
                href={whales}
                download
                >
                Download CV
                </Me>
            </Box>
            <Circle src="images/circle.png"></Circle>
            <Artemisa src="https://i.pinimg.com/originals/83/cd/1a/83cd1ab55f220c4ac7083f63fa20a860.png"/>
        </Container>


    );
};

export default Home;