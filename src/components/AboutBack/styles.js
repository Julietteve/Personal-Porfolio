import styled from 'styled-components/macro';
import {fadeIn} from '../../animations';

export const Container = styled.div`
    width:40vw;
    height:100vh;
    background-image:url("images/background.jpg");
    background-size: cover;

    @media only screen and (max-width: 768px) {
        display:none;
  }
`;

export const About = styled.h1`
    margin:6%;
    font-size: 15rem;
    word-wrap:break-word;
    line-height:0.8;
    color: ivory;
  text-align: left;
  text-transform:uppercase;
  animation: ${fadeIn} 2s ease;

`;