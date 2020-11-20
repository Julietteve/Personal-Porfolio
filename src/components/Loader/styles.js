import styled from 'styled-components/macro';
import {zoomOut, growLeft,fadeOut,expand} from '../../animations';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
    background-color:black;
    animation-timing-function: linear;
    animation: ${expand} cubic-bezier(0.785, 0.135, 0.15, 0.86) .5s backwards;
    animation-delay: 0.10s;
`;

export const Line = styled.div`
    width:30%;
    height:10px;
    border-bottom: 1px solid #262626;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) .5s forwards;
    animation-delay: 0.4s;
`;



export const Name = styled.p`
    color:white;
    text-transform:uppercase;
    letter-spacing:0.5rem;
    animation: ${zoomOut} .5s ease-out, ${fadeOut} .9s ease-in-out;
    animation-timing-function: linear;
`;