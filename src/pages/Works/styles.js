import styled from 'styled-components/macro';

export const OverLayer = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
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

    &:before{
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    }
`;

export const ContainerWork = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
`;

export const Card = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    width: calc(100%/4);
    height:50vh;
    overflow: hidden;
    position: relative;
    display: inline-block;
	cursor: pointer;
   
   &:hover{
       display:block;
   }
    &:hover ${OverLayer}{
        opacity:1;
    }
    &:hover ${Cover}{
    opacity:0.2;
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    }
`;

export const ProjectName = styled.h3`

`;
export const SeeCode = styled.a`
    text-decoration:none;
   
`;

export const Tool = styled.div`
    font-size:0.9rem;
`;

export const CodeBox = styled.div`
    margin-top:15%;
    padding:2%;

`;

