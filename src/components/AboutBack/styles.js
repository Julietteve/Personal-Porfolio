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
        width:100%;
        box-sizing:border-box;
    }
`;

export const Info = styled.div`
    color:white;
    line-height: 2;
    text-align:left;
    font-size:13px;
    animation: ${fadeIn} 2s ease;
    letter-spacing:1px;
    @media only screen and (max-width: 768px) {
        text-align:right;
  }
`;

export const Line = styled.div`
    height:30px;
    width:20%;
    border-top: 1px white solid;
    margin-right:auto; 
    margin-left:0;
    animation: ${fadeIn} 2s ease;

    @media only screen and (max-width: 768px) {
        width:60%;
        margin-right:0;
  }
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
    

    @media only screen and (max-width: 768px) {
     font-size:1.5rem;
     text-align: center;
  }
`;
