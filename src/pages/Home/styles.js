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

  @media only screen and (max-width: 768px) {
    flex-direction:column;
  }
  

`;

export const Slogan = styled.h1`
  font-size:3em;
  text-transform:uppercase;
  line-height:1;
  margin-bottom:20px;
  position:relative;
  z-index:1;
  opacity: 0;
  animation: ${fadeInRigth} ease 0.4s forwards;
  animation-delay: 0.4s;
  text-align:center;
  @media only screen and (max-width: 768px) {
    font-size:2em;
    margin-top:0px;
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
 width: 400px;
  height: 20px;
  overflow:hidden;
  white-space:nowrap;
  padding:2%;
 
  @media only screen and (max-width: 768px) {
    width:300px;
    height:60px;
  }
`;

export const Circle = styled.img`
  position: absolute;
  top:10%;
  left: 20%;
  width:30%;
  animation: ${fadeInRigth} ease 0.4s forwards;

  @media only screen and (max-width: 768px) {
    width:40%;
    top:50%;
    left: 60%;
  }
  
`;

export const Me = styled.a`
    font-size:1em;
    color:black;
    text-decoration:none;
    text-transform:uppercase;
    letter-spacing:0.2rem;
    width:40%;
    text-align:center;
    margin:5%;
    margin-left:0;
    text-decoration:none;
    cursor: pointer;
    animation: ${fadeInRigth} ease 0.4s forwards;
    animation-delay: 0.4s;
    position:relative;
    z-index:1;
    transition: all 0.3 ease-in-out;
    &:hover{
      font-weight:bolder;
  }

  @media only screen and (max-width: 768px) {
    width:60%;
    padding:4%;
    margin-left:0px;
    }
`;

export const Box = styled.div`
   display:flex;
   flex-direction:column;
   width:40%;
   justify-content:center;
   align-items:center;

   @media only screen and (max-width: 768px) {
    width:50%;
  }
`;

export const Artemisa = styled.img`
  width:20%;
  animation: ${fadeInRigth} ease 0.4s forwards;
  position:absolute;
  bottom: -40%;
  opacity:0;

  @media only screen and (max-width: 768px) {
  }
  
`;

