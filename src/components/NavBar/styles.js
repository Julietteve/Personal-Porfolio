import styled from 'styled-components/macro';
import {Link as LinkIcon} from 'react-router-dom';

export const OverLay = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`;

export const NavBarContainer = styled.aside`
    width:5%;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    background-color:black;
`;

export const IconLink = styled.a`
    display:block;
    color:white;
    font-size:1.2rem;
    padding:30%;
    transition: all .2s ease-in-out;
    cursor: pointer;
    margin:20%;

    &:hover{
        transform: scale(1.1);
    }
`;

export const NavIcon = styled(LinkIcon)`
    color: white;
    text-decoration: none;
    text-transform:uppercase;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 0.8rem;
`;

export const Icon = styled.div`
    color: white;
    text-decoration: none;
    font-size: 2em;
    opacity: 1;
    height: auto;
    transition: .7s ease;
    backface-visibility: hidden;

`;

export const Container = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
      position: relative;
      width:100%;
      transition: all .2s ease-in-out;
      padding:30%;

    &:hover ${OverLay} {
    opacity: 1;
    }

    &:hover ${Icon} {
    opacity: 0;
}
`;

export const RoutesContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin:30%;
`;

export const AnchorsContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin:30%;
`;


