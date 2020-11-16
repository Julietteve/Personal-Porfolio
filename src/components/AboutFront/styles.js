import styled from 'styled-components/macro';
import {fadeIn} from '../../animations';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100vw;
    height:100vh;
    padding:3%;
    background-color:black;
`;
export const Quote = styled.h2`
    color:ivory;
    margin:5%;
    margin-bottom:2%;
    text-align:right;
    animation: ${fadeIn} 2s ease;
    letter-spacing:0.1rem;
`;

export const Author = styled.p`
   color:ivory;
   text-align:right;
   animation: ${fadeIn} 2s ease;
   font-style:italic;
   margin-right:5%;
   font-size:0.9rem;
`;
export const Info = styled.div`
    color:ivory;
    margin:2%;
    padding:2%;
    line-height: 2;
    text-align:justify;
    font-size:0.9rem;
    animation: ${fadeIn} 2s ease;
   

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

    :focus:hover{
        outline:none;
    }
    :hover{
        background-color:ivory;
        color:black;
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10%;
    margin-right:5%;
    margin-top:5%;
`;