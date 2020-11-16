import styled from 'styled-components/macro';
import {fadeIn} from '../../animations';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    background-image:url("images/background.jpg");
    background-size: cover;
`;

export const About = styled.div`
    margin:6%;
    font-size: 15rem;
    word-wrap:break-word;
    line-height:0.8;
    color: ivory;
  text-align: left;
  text-transform:uppercase;
  animation: ${fadeIn} 2s ease;

`;