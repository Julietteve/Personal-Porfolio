import styled from 'styled-components/macro';
import {fadeInRigth} from '../../animations'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    width:100%;

    @media only screen and (max-width: 768px) {
      width:auto;
      flex-direction:column;
      height:auto;
}
   
`;

export const Skill= styled.div`
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    @media only screen and (max-width: 768px) {
    flex-direction:column;
}
`;
export const SkillsContainer = styled.div`
    display:flex;
    width:80%;
    background-color: white;
    justify-content:center;
    align-items:center;
    height:100vh;
    animation: ${fadeInRigth} ease 0.4s forwards;

    @media screen and (max-width: 992px) {
    width: 85%;
  }
   
    @media only screen and (max-width: 768px) {
    height:auto;
    width:100%;;
   
}
`;

export const HoverRight = styled.div`
    position:absolute;
    top:38%;
    right: -20%;
    transform: rotate(90deg);
    letter-spacing: 0.2rem;
    font-size:14px;
    width:400px;

`;

export const HoverLeft = styled.div`
    position:absolute;
    bottom:38%;
    left: -20%;
    transform: rotate(-90deg);
    letter-spacing: 0.2rem;
    font-size:14px;
    width:400px;

`;

export const Foot = styled.div`
   
@media only screen and (max-width: 768px) {
    height:100px;
    width:100%;
    position: relative;
}
  
`;




