import styled from 'styled-components/macro';
import{scroll, fadeInRigth, float,} from '../../animations';


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
  width:40%;
  font-size:3em;
  text-transform:uppercase;
  line-height:1;
  margin-bottom:20px;
  position:relative;
  z-index:1;
  opacity: 0;
  animation: ${fadeInRigth} ease 0.4s forwards;
  animation-delay: 0.4s;
  position:absolute;
  text-align:center;
  -webkit-text-stroke: 1px black; /* width and color */
   color: transparent;
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
    font-size:0.9em;
    color:black;
    text-decoration:none;
    text-transform:uppercase;
    letter-spacing:0.3rem;
    width:40%;
    text-align:center;
    margin:10%;
    margin-bottom:0;
    text-decoration:none;
    cursor: pointer;
    animation: ${fadeInRigth} ease 0.4s forwards;
    animation-delay: 0.4s;
    transition: all .2s ease-in-out;
    position:relative;
    z-index:1;
    transition: all 0.3 ease-in-out;
    padding-bottom: 10px;
    width:40%;
    &:hover{
     text-decoration:underline;
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
  width:50%;
  animation: ${fadeInRigth} ease 0.4s forwards;
  animation: ${float} 6s ease-in-out infinite;

  @media only screen and (max-width: 768px) {
  }
  
`;

export const About = styled.div`
  position: absolute;
  left:12%;
  bottom:7%;
  display:flex;
  flex-direction:row;
`;

export const What = styled.div`
  display:flex;
  flex-direction:column;
  text-align: left;
  margin-right:60px;
`;

export const Type = styled.div`
  font-size: 15px;
  font-weight:bold;
  margin-bottom:10px;
  letter-spacing:0.1rem;

`;

export const Data = styled.p`
  line-height:0;
  font-size: 13px;
  margin-top:5px;
  color:gray;
`;



