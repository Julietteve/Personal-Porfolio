import styled from 'styled-components';
import {Link as LinkHome} from 'react-router-dom'

export const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:ivory;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:black;
`;

export const NotFound = styled.h1`
    font-size:15rem;
    position:relative;
    z-index:1;
    letter-spacing:0.5rem;
    margin:0;
`;
export const Warn = styled.div`
    font-size:2rem;
    position:relative;
    z-index:1;
    letter-spacing:0.3rem;
    margin:2%;
`;

export const Home = styled(LinkHome)`
    text-decoration:none;
    position:relative;
    z-index:1;
    color:ivory;

    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Glitch = styled.img`
    position:absolute;
    top:20%;
    left:40%;
    opacity:0.4;
    width:30%;
`;

export const Box = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:1%;
    margin:2%;
    z-index:1;
    text-transform:uppercase;
    background-color:black;
    color:ivory;
    
`;

export const Corner = styled.div`
    position:absolute;
    right:0;
    top:0;
    width:50%;
    height:50%;
    background-color:black;
`;

