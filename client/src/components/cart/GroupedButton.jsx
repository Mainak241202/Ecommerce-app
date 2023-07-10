import { Button, ButtonGroup, styled } from "@mui/material";
import React from "react";

const Component = styled(ButtonGroup)({
  marginTop: "30px",
});

const StyledButton = styled(Button)({
  borderRadius: "50%",
});

const GroupedButton = () => {
  return (
    <Component>
      <StyledButton>-</StyledButton>
      <Button disabled>1</Button>
      <StyledButton>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
