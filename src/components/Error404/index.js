import React from 'react';
import {Container, NotFound,Home, Glitch, Warn, Box, Corner} from './styles'

const Error404 = () => {
    return (
        <Container>
            <Glitch src="images/glitch.png"/>
            <NotFound>404</NotFound>
            <Warn>Page not found</Warn>
            <Box>
            <Home to="/">Go home</Home>
            </Box>
        </Container>
    );
};

export default Error404;