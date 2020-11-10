import styled, {keyframes} from 'styled-components/macro';
import {Link as LinkIcon} from 'react-router-dom';

  export const fadeIn= keyframes`
     0%{
      opacity: 0;
    }
    100%{
  
      opacity: 1;
    }
  `;

  export const Shine = keyframes`
  from {
    mask-position: 150%;
  }
  
  to {
    mask-position: -50%;
}
  `;
    
export const Frame = styled.div`
  display:flex;
  justify-content:end;

`;
export const Maria = styled.img`
    position:absolute;
    right:0;
    width:70%;
    opacity:1;
    filter:contrast(110%);
    animation: ${fadeIn} 5s ease;
`;

export const Container = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ac3e4b' fill-opacity='0.23' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  position: relative;
  width:100vw;
  height:100vh;
  color:black;
  display:flex;
  
`;

export const Greeting = styled.div`
  font-family: 'Playfair Display', serif;
  font-size:5em;
  animation: ${fadeIn} 5s ease;

`;

export const Introduce = styled.div`
  margin:0;
  font-family: 'Trocchi', serif;
  font-size:1.3em;
  animation: ${fadeIn} 5s ease;
  padding-top: 0;
  letter-spacing: 3px;
  width: 100%;
  border-bottom: 1px solid #282723;
  line-height: 0.1em;
  margin: 10px 0 20px;
  position: absolute;
    

`;

export const Span = styled.span`
   background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ac3e4b' fill-opacity='0.23' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  padding: 0 10px;
`;

export const Name = styled.div`
    font-family: 'Abril Fatface', cursive;
    text-transform:uppercase;
    font-size:7em;
    animation: ${fadeIn} 5s ease;
    color:#AC3E4B;

`;

export const Message = styled.div`
    position:absolute;
    top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  line-height:1;
  padding-top:2%;
  padding-bottom:2%;
  text-align: center;

`;

export const Invitation = styled(LinkIcon)`
 text-decoration: none;
 color:#AC3E4B;
font-size:2.5rem;
 position:absolute;
 left:30%;
 top:35%;
  margin-top:20%;
  font-family: 'Dancing Script', cursive;
  transform: rotate(-10deg);
  transition: all .2s ease-in-out;
  animation: ${fadeIn} 10s ease;
  
  :after {
	content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 1px solid;
  margin-top: 10px;
  opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
}

:hover:after {
  opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}
  
`;

export const Code = styled.div`
    top:50%;
    position:absolute;
    color:#facfe9;
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
    transform: rotate(-90deg);
`;

