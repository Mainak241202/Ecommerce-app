import React from "react";
import { Box, Button, styled } from "@mui/material";

const LeftContainer = styled(Box)({
  minWidth: "40%",
  padding: "40px 0 0 80px",
});

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Image src={product.detailUrl} alt="pic" />
      <Button variant="contained">Add to Cart</Button>
      <Button variant="contained">Buy Now</Button>
    </LeftContainer>
  );
};

export default ActionItem;
