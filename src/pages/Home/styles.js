import styled from 'styled-components/macro';
import{scroll, fadeInRigth} from '../../animations';


export const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  background-color:ivory;
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
`;

export const Info = styled.div`
  font-size:1em;
  letter-spacing:0.3rem;
  position: relative;
  -webkit-animation: ${scroll} 20s infinite linear;;
  -moz-animation: ${scroll} 20s infinite linear;
  -o-animation: ${scroll} 20s infinite linear;
  animation: ${scroll} 20s infinite linear;
`;

export const Scroll = styled.div`
 width: 500px;
  height: 20px;
  overflow:hidden;
  white-space:nowrap;
`;

export const Circle = styled.img`
  position: absolute;
  top:10%;
  left: 60%;
  width:25%;
  animation: ${fadeInRigth} ease 0.4s forwards;
`;


export const Me = styled.a`
    font-size:1em;
    background-color:black;
    color:ivory;
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
    background-color:ivory;
    color:black;
    border: 1px solid black;
      
    }
`;

export const Box = styled.div`
   display:flex;
   flex-direction:column;
   width:40%;
`;

export const Artemisa = styled.img`
  width:30%;
  position:relative;
  z-index:1;
  margin-top:10%;
  animation: ${fadeInRigth} ease 0.4s forwards;
`;




