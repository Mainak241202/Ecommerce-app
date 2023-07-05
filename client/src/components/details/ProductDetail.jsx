import React from "react";
import {
  Typography,
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
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
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

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
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹329</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="img" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;