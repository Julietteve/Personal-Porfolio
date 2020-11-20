import styled from 'styled-components/macro';
import {fadeIn} from '../../animations';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    width:60vw;
    height:100vh;
    background-color:black;
    padding-right:7%;
    padding-left:7%;

    @media only screen and (max-width: 768px) {
        width:100%;
  }
`;
export const Quote = styled.h2`
    color:ivory;
    margin:5%;
    margin-bottom:2%;
    text-align:right;
    animation: ${fadeIn} 2s ease;
    letter-spacing:0.1rem;
    margin-right:0;
    text-transform:uppercase;

    @media only screen and (max-width: 768px) {
        font-size:1.3rem;
  }
`;

export const Author = styled.p`
   color:ivory;
   text-align:right;
   animation: ${fadeIn} 2s ease;
   font-style:italic;
   margin-right:5%;
   font-size:0.9rem;
   margin-right:0;
`;
export const Info = styled.div`
    color:ivory;
    line-height: 2;
    text-align:justify;
    font-size:0.9rem;
    animation: ${fadeIn} 2s ease;

    @media only screen and (max-width: 768px) {
        font-size:0.8rem;
  }
`;

export const ChangeButton = styled.button`
    background-color:transparent;
    color:ivory;
    border: 1px solid ivory ;
    width:40%;
    padding:2%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing:0.6rem;
    cursor: pointer;
    outline:none;

    :focus:hover{
        outline:none;
    }
    :hover{
        background-color:ivory;
        color:black;
    }


    @media only screen and (max-width: 768px) {
        width:60%;
        font-size: 0.9rem;
  }
`;

export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10%;
    margin-top:5%;
    margin-right:0;
       animation: ${fadeIn} 2s ease;
`;