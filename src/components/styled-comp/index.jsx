import React from "react";
import { Button } from "./button/Button.styles";
import ExtendedLink from "./extended-link/ExtendedLink";
import HeaderText from "./header/HeaderText";
import Link from "./link/Link";
import Wrapper from "./wrapper/Wrapper";

function StyledComponents() {
    return (
        <Wrapper>
            <HeaderText> Default Text </HeaderText>
            <HeaderText headerColor="red"> Colored Text </HeaderText>
            <Link
                secondary
                href="www.google.com"
                target="_blank"
                rel="noopener"
            >
                Learn FS Development
            </Link>
            <Link primary href="www.google.com" target="_blank" rel="noopener">
                Learn FS Development
            </Link>
            <ExtendedLink>Extended Link</ExtendedLink>
            <ExtendedLink secondary>Extended Link</ExtendedLink>
            <Button>Button 1</Button>
            <Button primary textColor={"grey"}>
                Button Primary
            </Button>
        </Wrapper>
    );
}

export default StyledComponents;
