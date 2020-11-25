import styled from 'styled-components';

export const Container = styled.div`
    display:flex;

    @media only screen and (max-width: 768px) {
        flex-direction:column;
    }
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