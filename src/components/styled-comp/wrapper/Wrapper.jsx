import styled from "styled-components";

export default styled.div`
    margin: 1rem auto;
    width: 100%;
    background-color: grey;
    display: flex;
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    justify-content: center;
    align-items: center;
`;
