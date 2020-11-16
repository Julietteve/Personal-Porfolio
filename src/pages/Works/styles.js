import styled from 'styled-components/macro';
import {fadeInRigth} from '../../animations'

export const ContainerWork = styled.div`
    display: flex;
`;

export const Filter = styled.div`
    width:40vw;
    height:100vh;
    background-color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const CardContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:60vw;
    height:100vh;
    background-color:black;
    overflow-y:scroll;
    overflow-x:hidden;
    &::-webkit-scrollbar {
    display: none;  
}
`;

export const Work = styled.h1`
    width:100%;
    text-transform:uppercase;
    color:ivory;
    font-size:6rem;
    word-wrap:break-word;
    line-height:1;
    text-align:center;
    margin:0;
    animation: ${fadeInRigth} ease 0.4s forwards;
`;

export const Button = styled.button`
    color:ivory;
    background-color:transparent;
    border: none;
    margin:2%;
    text-transform: uppercase;

    :hover{
        background-color:ivory;
        color:black;
    }

    :focus{
        text-decoration:line-through;
        border: none;
        outline:none;
    }
`;

export const ToolContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    margin:10%;
    animation: ${fadeInRigth} ease 0.4s forwards;
`;

export const Img = styled.img`
    width:60%;
    filter: grayscale(90%);
`;

export const Meme = styled.div`
  margin-top:5%;  
  opacity:0;
  transition: all .2s ease-in-out;
`;

export const Choose = styled.div`
    color:ivory;
    font-size:0.9rem;
    text-align:center;
    margin:10%;
    animation: ${fadeInRigth} ease 0.4s forwards;
    
    :hover ${Meme}{
        opacity:1;
    }
`;

export const Wrap = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   width:80%;
   margin:5%;
`;
















