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
    width: 50%;
    height: 100vh;
  

    &:hover ${FlipCardInner}{
        transform: rotateY(180deg);
    }
`;

export const FlipCardFront = styled.div`
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
    background-color: ivory;
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;


export const Animal = styled.img`
    width:100%;
    height:100%;
    margin:0 auto;
    padding:0;
    margin:0;
    position:absolute;
    
`;

export const Description = styled.div`
    width:35%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    opacity:0;
`;

export const Kind = styled.h1`
color:black;
text-transform: uppercase;
font-size:15rem;
word-break:break-word;
line-height:0.9; 
&:hover ${Description}{
    opacity:1;
}


`;


 


