import React from 'react';
import {About, Data, What, Type, Container, Artemisa, Slogan, Box, Me, Foot} from './styles';
import cv from "./Julieta-Garcia CV-2020.pdf";
import {Footer} from '../../components'

const Home = () => {    

    return (
        <Container>
            <Box>
                <About>
                    <What>
                        <Type>What</Type>
                        <Data>Front End</Data>
                        <Data>Web design</Data>
                    </What>
                    <What>
                        <Type>Who</Type>
                        <Data>Julieta Garcia</Data>
                        <Data>Autentic passionate</Data>
                    </What>
                </About>
                <Artemisa src= "images/artemisa.png"></Artemisa>
                <Slogan>Because the outside also matters.</Slogan>
                <Me 
                target="_blank" 
                rel="noopener noreferrer" 
                href={cv}
                download
                >
                    Download CV   </Me>
            </Box>
            <Foot>
               <Footer></Footer>
            </Foot>
        </Container>


    );
};

export default Home;