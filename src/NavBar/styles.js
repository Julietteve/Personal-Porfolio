import styled from 'styled-components/macro';

export const NavBarContainer = styled.aside`
    display:flex;
    flex-direction: column;
    align-items:center;
    height:100vh;
`;

export const IconLink = styled.a`
    color:red;
    font-size:1.4rem;
    margin: 2%;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`;

