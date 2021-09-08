import styled, { css } from "styled-components";

export default styled.a`
    font-size: 1.2rem;
    text-decoration: none;
    color: blue;

    ${(props) =>
        props.secondary &&
        css`
            background-color: purple;
            border-radius: 0.3rem;
            padding: 1rem;
        `}
    ${(props) =>
        props.primary &&
        css`
            background-color: black;
            border-radius: 0.9rem;
            padding: 0.5rem;
        `}

    &:hover {
        font-size: 1.5rem;
        opacity: 0.7;
    }
`;
