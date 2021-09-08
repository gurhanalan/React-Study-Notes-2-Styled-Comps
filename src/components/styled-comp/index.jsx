import React from "react";
import { Button } from "./button/Button.styles";
import HeaderText from "./header/HeaderText";
import Link from "./link/Link";
import Wrapper from "./wrapper/Wrapper";

function StyledComponents() {
    return (
        <Wrapper>
            <HeaderText> Default Text </HeaderText>
            <HeaderText headerColor="red"> Colored Text </HeaderText>
            <Link href="www.google.com" target="_blank" rel="noopener">
                Learn FS Development
            </Link>
            <Button>Button 1</Button>
            <Button primary textColor={"grey"}>
                Button Primary
            </Button>
        </Wrapper>
    );
}

export default StyledComponents;
