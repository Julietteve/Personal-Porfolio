import styled from 'styled-components/macro';
import {fadeIn} from '../../animations';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:40vw;
    height:100vh;
    background-color:black;
    padding-right:3%;
    padding-left:10%;

    @media only screen and (max-width: 768px) {
        width:100%;
        box-sizing:border-box;
    }
`;
export const Quote = styled.div`
    color:white;
    margin-top:10%;
    margin-bottom:2%;
    text-align:left;
    animation: ${fadeIn} 2s ease;
    letter-spacing:0.2rem;
    margin-right:0;
    font-size:1.5rem;
`;

export const Author = styled.p`
   color:white;
   text-align:left;
   animation: ${fadeIn} 2s ease;
   margin-right:5%;
   font-size:0.9rem;
   margin-right:0;
   letter-spacing:0.1rem;
   padding-top:20px;
`;

export const ChangeButton = styled.button`
    background-color:transparent;
    color:white;
    width:50%;
    padding-top:2%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing:0.6rem;
    cursor: pointer;
    outline:none;
    border:none;
    :focus:hover{
        outline:none;
    }

    @media only screen and (max-width: 768px) {
        width:60%;
        
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

