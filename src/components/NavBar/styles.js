import styled from 'styled-components/macro';
import {NavLink as LinkIcon} from 'react-router-dom';

export const OverLay = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`;

export const NavBarContainer = styled.aside`
    width:8%;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    border-right: 0.5px solid ${props => props.border};
    background-color: ${props => props.background};
    color:${props => props.color};

    @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const IconLink = styled.a`
    display:block;
    font-size:1rem;
    padding:30%;
    transition: all .2s ease-in-out;
    cursor: pointer;
    margin:20%;
    color:${props => props.color};

    &:hover{
        transform: scale(1.1);
    }
`;

export const NavIcon = styled(LinkIcon)`
    color: ${(props) => props.color };
    text-decoration: none;
    text-transform:uppercase;
    font-size: 0.7rem;
    margin:10%;
    letter-spacing:0.2rem;
    transform: rotate(-90deg);
    transition: all .2s ease-in-out;
    &.active {
        transform: rotate(0deg);
    }
`;

export const Icon = styled.div`
    text-decoration: none;
    font-size: 1.8em;
    opacity: 1;
    height: auto;
    transition: .7s ease;
    backface-visibility: hidden;
    color:${props => props.color};
    margin:40%;
`;

export const Container = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      position: relative;
      width:100%;
      transition: all .2s ease-in-out;
      padding:60%;
      color:${props => props.color};
    &:hover {
        transform: scale(1.1);
    }
    
`;

export const RoutesContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin:30%;
`;

export const AnchorsContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin:30%;
`;

export const Name = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin:30%;
    width:100%;
    text-transform:uppercase;
    font-size : 1.2rem;
    color:${props => props.color};
`;
 



