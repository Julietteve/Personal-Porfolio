import styled from 'styled-components/macro';

export const MainContainer = styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
`;

export const Section = styled.div`
    width:92%;
    height:100vh;

    @media only screen and (max-width: 768px) {
     width:100%;
  }
`;