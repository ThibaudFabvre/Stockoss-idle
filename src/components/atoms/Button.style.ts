import styled  from 'styled-components';

export const SButton = styled.button`
    border-radius: 5px;
    background-color: ${props => props.color};
    border: none;
    box-shadow: 0px 0px 10px 0px black;
    width: 100px;

    &:active{
        transform: scale(0.9);
    }
    &:disabled{
        filter: opacity(25%);
    }
`;
