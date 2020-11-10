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
    height: 75vh;
    margin:1%;
  

    &:hover ${FlipCardInner}{
        transform: rotateY(180deg);
    }
`;

export const FlipCardFront = styled.div`
    border-radius:10px;
    background-color:#E4E3E1;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
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
 
 


