import styled from 'styled-components/macro';
import {fadeInRigth} from '../../animations'

export const ContainerWork = styled.div`
    display: flex;

    @media only screen and (max-width: 768px) {
      flex-direction:column;
      height:auto;
}
`;

export const Filter = styled.div`
    width:40vw;
    height:auto;
    background-color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 768px) {
        width:100%;
}
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

@media only screen and (max-width: 768px) {
    width:100%;
}
`;

export const Work = styled.h1`
    width:100%;
    text-transform:uppercase;
    color:white;
    font-size:6rem;
    word-wrap:break-word;
    line-height:1;
    text-align:center;
    margin:0;
    animation: ${fadeInRigth} ease 0.4s forwards;

    @media screen and (max-width: 992px) {
    font-size:4rem;
  }
`;

export const Button = styled.button`
    color:white;
    background-color:transparent;
    border: none;
    margin:2%;
    text-transform: uppercase;

    :hover{
        background-color:white;
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
    color:white;
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
















