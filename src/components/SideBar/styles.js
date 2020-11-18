import styled from 'styled-components/macro';
import { MdClose } from "react-icons/md";
import {NavLink as LinkIcon} from 'react-router-dom';
import {fadeInRigth} from "../../animations";

export const Container = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background-color:black;
    top: 0;
    right:0;
    transition: 0.3 ease-in-out;
    display:flex;
    justify-content:center;
    flex-direction: column;
    opacity: ${({isOpen})=> (isOpen ? '100%' : '0')};
    top: ${({isOpen})=>(isOpen ? '0': '-100%')};
`;

export const CloseIcon =styled(MdClose)`
    color: ivory;
    cursor: pointer;
`;

export const Icon= styled.div`
    position:absolute;
    top:1.2rem;
    left:1.5rem;
    background: transparent;
    font-size:3rem;
    outline:none;
`;

export const Links = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    margin:20%;
`;

export const Social = styled.div`
   display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    margin-left:20%;
    margin-right:20%;
`;

export const IconLink = styled.a`
    font-size:1.2rem;
    transition: all .2s ease-in-out;
    cursor: pointer;
    color: ivory;
    animation: ${fadeInRigth} ease 0.4s forwards;

    &:hover{
        transform: scale(1.1);
    }
`;

export const NavIcon = styled(LinkIcon)`
    font-size:2rem;
    text-decoration: none;
    text-transform:uppercase;
    color:ivory;
    letter-spacing:0.7rem;
    margin:3%;
    transition: all .2s ease-in-out;
    animation: ${fadeInRigth} ease 0.4s forwards;
    &:hover{
       text-decoration:line-through;
    }
`;