import styled from 'styled-components/macro';
import {fadeIn} from '../../animations'

export const OverLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
`;
export const CodeContainer = styled.div`
   position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  padding:3%;

  @media only screen and (max-width: 768px) {
    padding:1%;
}
`;
export const Cover = styled.img`
    width:100%;
    height:auto;
    transition: .5s ease;
    backface-visibility: hidden;
    opacity:0.5;
    display:block;
    filter: grayscale(20%)
`;
export const CardHolder = styled.div`
    width:calc(100%/2);
    max-height:490px;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
	cursor: pointer;
    color:white;
    margin:0;
    animation: ${fadeIn} ease-in-out 0.4s;
    
    &:hover ${OverLayer}{
        opacity:1;
    }
    &:hover ${Cover}{
        opacity:0.1;
    }

    @media only screen and (max-width: 768px) {
        max-height:250px;
}
`;

export const ProjectName = styled.p`
    letter-spacing:0.1rem;
    font-weight:bolder;
    font-size:1rem;

    @media only screen and (max-width: 768px) {
      font-size:0.8rem;
}
`;
export const SeeCode = styled.a`
    color: lightgray;
    text-decoration:none;
    padding:3%;
    border-bottom: 1px white solid;

    @media only screen and (max-width: 768px) {
      font-size:0.8rem;
      
}
`;
export const CodeBox = styled.div`
    margin-top:15%;
    padding:2%;
`;
export const Tool = styled.div`
    font-size:0.9rem;

    @media only screen and (max-width: 768px) {
      font-size:0.7rem;
}

`;