import styled from "styled-components";

export const Button = styled.button`
    border: none;
    margin: 1rem;
    /* color: white; */
    color: ${(props) => (props.textColor ? props.textColor : "white")};
    padding: 1rem 2rem;
    text-align: center;
    background-color: ${(props) => (props.primary ? "blue" : "purple")};
    border-radius: 0.5rem;
    box-shadow: 0 1rem 4rem black;
    font-size: 1.5rem;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background-color: green;
        transform: scale(1.1);
    }
`;
