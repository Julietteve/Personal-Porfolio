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
    text-align:right;
    animation: ${fadeIn} 5s ease;
`;
export const Info = styled.div`
    color:ivory;
    margin:2%;
    padding:2%;
    line-height: 1.5;
    text-align:justify;
    animation: ${fadeIn} 10s ease;

`;

export const ChangeButton = styled.button`
    background-color:transparent;
    color:ivory;
    border: 1px solid ivory ;
    width:40%;
    padding:2%;
    text-align: center;
    text-transform: uppercase;
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
    animation: ${fadeIn} 5s ease;
`;