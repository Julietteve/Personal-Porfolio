import React from 'react';
import {About, Data, What, Type, Container, Info, Artemisa, Slogan, Box, Me, Scroll, Circle} from './styles';
import {intro} from './data';
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
                <Footer/>
            </Box>
        </Container>


    );
};

export default Home;