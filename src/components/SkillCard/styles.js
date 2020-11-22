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

    
@media only screen and (max-width: 768px) {
    width: 100%;
}
`;

export const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display:flex;
    letter-spacing:1px;

`;


export const FlipCardBack = styled.div`
    background-color: white;
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
    text-align: justify;
    line-height:1.5;
    font-size:13px;
    letter-spacing:1px;
`;

export const Kind = styled.h1`
text-transform: uppercase;
font-size:5rem;
word-break:break-word;
line-height:0.9; 
`;

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content:space-between;
width:90%;
`;

export const Skill = styled.div`
text-transform: uppercase;
margin:2%;
color:#262626;
font-size:0.9rem;
transition: all .2s ease-in-out;
:hover{
    transform: scale(1.1);
}
`;

export const Inner = styled.div`
padding:10%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const Key = styled.div`
 text-transform:uppercase;
 font-size:1.2rem;
 letter-spacing: 0.2rem;
padding:8%;
`;




 


