import styled from 'styled-components/macro';
import {fadeIn} from '../../animations';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    width:60vw;
    height:100vh;
    background-color:black;
    padding-right:5%;
    padding-left:5%;

    @media only screen and (max-width: 768px) {
        width:100%;
  }
`;
export const Quote = styled.h1`
    color:white;
    margin-top:10%;
    margin-bottom:2%;
    text-align:right;
    animation: ${fadeIn} 2s ease;
    letter-spacing:0.1rem;
    margin-right:0;

    @media only screen and (max-width: 768px) {
        font-size:1.3rem;
        margin-top:20%;
  }
`;

export const Author = styled.p`
   color:white;
   text-align:right;
   animation: ${fadeIn} 2s ease;
   margin-right:5%;
   font-size:0.9rem;
   margin-right:0;
   letter-spacing:0.2rem;
`;
export const Info = styled.div`
    color:white;
    line-height: 2;
    text-align:justify;
    font-size:13px;
    animation: ${fadeIn} 2s ease;
    letter-spacing:1px;
`;

export const ChangeButton = styled.button`
    background-color:transparent;
    color:white;
    border: 1px solid white ;
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
        background-color:white;
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