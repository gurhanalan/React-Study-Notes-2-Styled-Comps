import React from "react";
import { Button } from "./button/Button.styles";

function StyledComponents() {
    return (
        <div>
            <Button>Button 1</Button>
            <Button primary textColor={"grey"}>
                Button Primary
            </Button>
        </div>
    );
}

export default StyledComponents;
