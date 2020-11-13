import React from 'react';
import {Container, Info, Artemisa, Slogan, Box, Me, Scroll, Circle} from './styles'

const Home = () => {    

    return (
        <Container>
            <Box>
                <Slogan>Because the outside also matters</Slogan>
                <Scroll>
                    <Info>  My name is Julie, passionate dev and designer My name is Julie, passionate dev and designer My name is Julie, passionate dev and designer </Info>
                </Scroll>
                <Me to="/skills">Meet me</Me>
            </Box>
            <Circle src="images/circle.png"></Circle>
            <Artemisa src="https://i.pinimg.com/originals/83/cd/1a/83cd1ab55f220c4ac7083f63fa20a860.png"/>
        </Container>


    );
};

export default Home;