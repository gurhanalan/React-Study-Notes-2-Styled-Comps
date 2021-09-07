import React from "react";
import { Button } from "./button/Button.styles";
import HeaderText from "./header/HeaderText";
import Wrapper from "./wrapper/Wrapper";

function StyledComponents() {
    return (
        <Wrapper>
            <HeaderText> Default Text </HeaderText>
            <HeaderText headerColor="red"> Colored Text </HeaderText>
            <Button>Button 1</Button>
            <Button primary textColor={"grey"}>
                Button Primary
            </Button>
        </Wrapper>
    );
}

export default StyledComponents;
