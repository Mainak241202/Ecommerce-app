import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Header = styled(Box)({
  padding: "15px 24px",
  background: "#fff",
  borderBottom: "1px solid #f0f0f0",
});

const Heading = styled(Typography)({
  color: "#878787",
});



const TotalView = ({ cartItems }) => {
  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Box>
        <Typography>
          Price ({cartItems?.length} item)
          <Box component="span">₹100</Box>
        </Typography>
        <Typography>
          Discount
          <Box component="span">-₹100</Box>
        </Typography>
        <Typography>
          Delivery Charges
          <Box component="span">₹40</Box>
        </Typography>
        <Typography>
          Total Amount
          <Box>₹400</Box>
        </Typography>
        <Typography>You will save ₹30 on this order</Typography>
      </Box>
    </Box>
  );
};

export default TotalView;
