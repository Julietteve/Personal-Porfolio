import styled from 'styled-components/macro';

export const Container = styled.div`
    display:none;

    @media only screen and (max-width: 768px) {
        display:flex;
        width:100%;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        position:absolute;
        bottom:0px;
    }
`;

export const Contact = styled.div`
    padding:5%;
    display:flex;
    flex-direction:column;
`;

export const DataType = styled.div`
    font-weight:bold;
    text-transform:uppercase;
    font-size:0.8rem;
    margin-top:5px;
`;

export const Name = styled.div`
    font-weight:bold;
    text-transform:uppercase;
    font-size:1.2rem;
`;

export const Info = styled.a`
    text-decoration:none;
    color:gray;
    font-size:0.8rem;
    margin-top:10px;
`;
