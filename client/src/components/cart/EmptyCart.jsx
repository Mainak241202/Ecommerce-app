import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)({
  width: "80%",
  height: "65vh",
  background: "#fff",
  margin: "80px 140px",
});

const Container = styled(Box)({
  textAlign: "center",
  paddingTop: "70px",
});

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Container>
        <img src={imgurl} alt="cart" style={{ width: "15%" }} />
        <Typography>Your cart is empty!</Typography>
        <Typography component="span">Add items to it now.</Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;
