import styled from 'styled-components/macro';
import{scroll, fadeInRigth} from '../../animations';


export const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  background-color:white;
  flex-direction:row;
  align-items:center;
  justify-content:center;

`;

export const Slogan = styled.h1`
  font-size:5em;
  text-transform:uppercase;
  line-height:1;
  margin-bottom:20px;
  position:relative;
  z-index:1;
  opacity: 0;
  animation: ${fadeInRigth} ease 0.4s forwards;
  animation-delay: 0.4s;

  @media only screen and (max-width: 768px) {
    font-size:4em;
  }
`;

export const Info = styled.div`
  font-size:1em;
  letter-spacing:0.3rem;
  position: relative;
  -webkit-animation: ${scroll} 20s infinite linear;;
  -moz-animation: ${scroll} 20s infinite linear;
  -o-animation: ${scroll} 20s infinite linear;
  animation: ${scroll} 20s infinite linear;

  @media only screen and (max-width: 768px) {
    margin:2%;
  }
`;

export const Scroll = styled.div`
display:flex;
align-items:center;
 width: 500px;
  height: 20px;
  overflow:hidden;
  white-space:nowrap;
  @media only screen and (max-width: 768px) {
    width:300px;
    height:60px;
  }
`;

export const Circle = styled.img`
  position: absolute;
  top:10%;
  left: 60%;
  width:30%;
  animation: ${fadeInRigth} ease 0.4s forwards;

  @media only screen and (max-width: 768px) {
    width:40%;
    top:20%;
    left: 50%;
  }
  
`;

export const Me = styled.a`
    font-size:1em;
    background-color:black;
    color:white;
    text-decoration:none;
    text-transform:uppercase;
    padding:2%;
    letter-spacing:0.2rem;
    border: 1px solid black;
    width:30%;
    text-align:center;
    margin:5%;
    margin-left:0;
    text-decoration:none;
    cursor: pointer;
    animation: ${fadeInRigth} ease 0.4s forwards;
    animation-delay: 0.4s;
    &:hover{
    background-color:white;
    color:black;
    border: 1px solid black;
  }

  @media only screen and (max-width: 768px) {
    width:100%;
    padding:4%;
    margin-left:0px;
    }
`;

export const Box = styled.div`
   display:flex;
   flex-direction:column;
   width:40%;

   @media only screen and (max-width: 768px) {
    width:45%;
  }
`;

export const Artemisa = styled.img`
  width:30%;
  position:relative;
  z-index:1;
  margin-top:10%;
  animation: ${fadeInRigth} ease 0.4s forwards;
  @media only screen and (max-width: 768px) {
    width:45%;
    left:5%;
  }
  
`;




