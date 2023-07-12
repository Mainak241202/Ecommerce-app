import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";

const Header = styled(Box)({
  padding: "15px 24px",
  background: "#fff",
  borderBottom: "1px solid #f0f0f0",
});

const Heading = styled(Typography)({
  color: "#878787",
});

const Container = styled(Box)({
  padding: "20px 24px",
  background: "#fff",
  "&>p": {
    marginBottom: "20px",
    fontSize: "14px",
  },
  "& > h6": {
    marginBottom: "20px",
  },
});

const Price = styled(Typography)({
  float: "right",
});

const Discount = styled(Typography)({
  fontWeight: 500,
  color: "green",
});

const TotalView = ({ cartItems }) => {
  const [price, setprice] = useState(0);
  const [discount, setdiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setprice(price);
    setdiscount(discount);
  };

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component="span">₹40</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Price>₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalView;
