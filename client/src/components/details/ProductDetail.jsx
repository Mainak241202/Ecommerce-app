import React from "react";
import { Typography, Box, styled } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material/";

const SmallText = styled(Box)({
  fontSize: "14px",
  "&>p": {
    fontSize: "14px",
    marginTop: "10px",
  },
  marginLeft: "10px",
  verticalAlign: "baseline",
});

const StyledBadge = styled(Badge)({
  marginRight: "10px",
  fontSize: "14px",
  color: "#00cc00",
});

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <span>
          <img
            src={fassured}
            style={{ width: 77, marginLeft: 20 }}
            alt="prod"
          />
        </span>
      </Typography>
      <Typography>
        <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#388E3C" }}>{product.price.discount} off</span>
      </Typography>
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Typography>
        <Typography>
          <StyledBadge />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Typography>
      </SmallText>
    </>
  );
};

export default ProductDetail;
