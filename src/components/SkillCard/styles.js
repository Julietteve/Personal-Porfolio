import styled from 'styled-components/macro';

export const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
`;

export const FlipCard = styled.div`
    background-color: transparent;
    perspective: 1000px;
    width: 30%;
    height: 80vh;
    margin:1%;
  

    &:hover ${FlipCardInner}{
        transform: rotateY(180deg);
    }
`;

export const FlipCardFront = styled.div`
    background-color:#E4E3E1;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display:flex;
    flex-direction: column;
    align-items:center;
`;


export const FlipCardBack = styled.div`
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;

export const Skill = styled.h1`
    font-family: 'Merriweather', serif;
    font-size:3rem;
`;
export const Animal = styled.img`
    width:70%;
    margin:0 auto;
    padding:5%;
    
`;
export const Quote = styled.p`
position:absolute;
bottom:5%;
    font-family: 'Roboto', sans-serif;
    padding:4%;
    font-size:0.9em;
    color:#898988;
`;

 


