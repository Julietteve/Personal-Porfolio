import styled from 'styled-components/macro';
import {fadeIn} from '../../animations'

export const OverLayer = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const Cover = styled.img`
    width:100%;
    height:auto;
    transition: .5s ease;
    backface-visibility: hidden;
    opacity:1;
    display:block;
`;

export const CardHolder = styled.div`
    width:calc(100%/2);
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow: hidden;
    position: relative;
    display: inline-block;
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
`;

export const ProjectName = styled.h2`
    text-transform:uppercase;
    letter-spacing:0.1rem;

    @media only screen and (max-width: 768px) {
      font-size:1rem;
}
`;
export const SeeCode = styled.a`
    color: lightgray;
    text-decoration:none;
    padding:3%;
    border-bottom: 1px ivory solid;

    @media only screen and (max-width: 768px) {
      font-size:0.9rem;
}
`;

export const CodeBox = styled.div`
    margin-top:15%;
    padding:2%;

`;

export const Tool = styled.div`
    font-size:0.9rem;

    @media only screen and (max-width: 768px) {
      font-size:0.8rem;
}

`;