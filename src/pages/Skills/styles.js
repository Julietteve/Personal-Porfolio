import styled from 'styled-components/macro';
import {fadeInRigth} from '../../animations'

export const Container = styled.div`
    display:flex;
    width:100%;

    @media only screen and (max-width: 768px) {
      width:auto;
      flex-direction:column;
      height:auto;
}
   
`;

export const DownloadContainer = styled.div`
    width:35%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    text-align:center;

    @media screen and (max-width: 992px) {
    width: 15%;
    padding: 2%;
  }
    
    @media only screen and (max-width: 768px) {
    width: auto;
    margin: 10%;
    text-align:center;
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
    width:65%;
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





