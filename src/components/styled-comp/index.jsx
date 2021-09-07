import React from "react";
import { Button } from "./button/Button.styles";
import Wrapper from "./wrapper/Wrapper";

function StyledComponents() {
    return (
        <Wrapper row>
            <Button>Button 1</Button>
            <Button primary textColor={"grey"}>
                Button Primary
            </Button>
        </Wrapper>
    );
}

export default StyledComponents;
