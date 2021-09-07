import styled from "styled-components";

export const Button = styled.button`
    border: none;
    margin: 2px;
    color: blue;
    height: 2rem;
    width: 4rem;
    background-color: chocolate;
    border-radius: 0.5rem;
    box-shadow: 0 1rem 4rem black;
    transition: all 0.3s;
    &:hover {
        background-color: green;
        transform: scale(1.2);
    }
`;
