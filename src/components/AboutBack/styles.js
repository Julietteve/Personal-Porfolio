import styled from 'styled-components/macro';
import {fadeIn} from '../../animations';

export const Container = styled.div`
    width:40vw;
    height:100vh;
    background-image:url("images/background.jpg");
    background-size: cover;
    display:flex;
    align-items:center;

    @media only screen and (max-width: 768px) {
        display:none;
  }
`;

export const About = styled.h1`
    margin:6%;
    font-size: 3rem;
    word-wrap:break-word;
    line-height:0.8;
  text-align: left;
  text-transform:uppercase;
  animation: ${fadeIn} 2s ease;
  -webkit-text-stroke: 1px white; /* width and color */
   color: transparent;
   line-height:1;

`;