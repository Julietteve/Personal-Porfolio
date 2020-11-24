import styled from 'styled-components/macro';
import {fadeIn} from '../../animations';

export const Container = styled.div`
    width:60vw;
    height:100vh;
    background-color:black;
    background-size: cover;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    padding-left:7%;
    padding-right:7%;

    @media only screen and (max-width: 768px) {
        display:none;
  }
`;

export const About = styled.h1`
    margin:6%;
    font-size: 3rem;
    word-wrap:break-word;
    line-height:0.8;
  text-align: center;
  text-transform:uppercase;
  animation: ${fadeIn} 2s ease;
  -webkit-text-stroke: 1px white;
   color: transparent;
   line-height:1;
`;

export const Info = styled.div`
    color:white;
    line-height: 2;
    text-align:left;
    font-size:13px;
    animation: ${fadeIn} 2s ease;
    letter-spacing:1px;
`;

export const Line = styled.div`
    height:30px;
    width:20%;
    border-top: 1px white solid;
    margin-right:auto; 
    margin-left:0;
    animation: ${fadeIn} 2s ease;
`;

export const Love = styled.h1`
    color:white;
    letter-spacing: 0.1rem;
    font-size:2rem;
    text-align: left;
    margin-right:auto; 
    margin-left:0;
    margin-bottom:16px;
    animation: ${fadeIn} 2s ease;
`;
