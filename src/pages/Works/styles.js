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
    width:30vw;
    height:auto;
    background-color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media only screen and (max-width: 768px) {
    width:100%;
    box-sizing:border-box;
}
`;

export const CardContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:70vw;
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


export const Button = styled.button`
    color:white;
    background-color:transparent;
    border: none;
    margin:5%;
    font-size:15px;
    letter-spacing:0.2rem;
    text-transform:lowercase;
    text-align:left;
    width:100%;

    :hover{
        text-decoration:line-through;
    }

    :focus{
         text-decoration:line-through;
        border: none;
        outline:none;
    }

    @media only screen and (max-width: 768px) {
        width:auto;
        margin:2%;
        letter-spacing:0;
        font-size:13px;
        text-transform:lowercase;

}
`;

export const ToolContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin:10%;
    margin-left:0px;
    animation: ${fadeInRigth} ease 0.4s forwards;
    margin-top:0px;

    @media only screen and (max-width: 768px) {
    margin:10%;
    width:80%;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:center;
}
`;

export const Img = styled.img`
    width:100%;
    filter: grayscale(90%);
`;

export const Meme = styled.div`
  position:absolute;
  z-index:1;
  opacity:0;
  transition: all .2s ease-in-out;
`;

export const Scroll = styled.div`
  position:absolute;
  transform:rotate(90deg);
  color:white;
  bottom:10%;
  left:30%;
  font-size:14px;
  letter-spacing:0.2rem;
  color:#262626;

  @media only screen and (max-width: 768px) {
     display:none;
}

`;

export const Choose = styled.div`
    color:white;
    font-size:1rem;
    letter-spacing:0.2rem;
    text-align:center;
    margin:5%;
    animation: ${fadeInRigth} ease 0.4s forwards;
    width: 50%;
    padding-bottom:20px;
    border-bottom:1px white solid;
    text-align:left;
    position:relative;

    @media only screen and (max-width: 768px) {
    text-align: center;
}
`;

export const Wrap = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   width:80%;
   margin:5%;
`;

export const Foot = styled.div`
@media only screen and (max-width: 768px) {
    height:150px;
    width:100%;
    position: relative;
    background-color:black;
    color:white
}
  
`;
















