import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

const Component = styled(Box)({
  borderTop: "1px solid #f0f0f0",
  display: "flex",
});

const LeftComponent = styled(Box)({
  margin: "20px",
});

const SmallText = styled(Typography)({
  color: "#878787",
  fontSize: "14px",
  marginTop: "10px",
});

const Remove = styled(Button)({
  marginTop: "20px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#000",
});

const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="prod" />
      </LeftComponent>
      <Box>
        <Typography>{item.title.longTitle}</Typography>
        <SmallText>
          Seller:RetailNet
          <span>
            <img
              src={fassured}
              style={{ width: 50, marginLeft: 10 }}
              alt="fam"
            />
          </span>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <span style={{ fontSize: 18, fontWeight: 600 }}>
            ₹{item.price.cost}
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <Remove>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
