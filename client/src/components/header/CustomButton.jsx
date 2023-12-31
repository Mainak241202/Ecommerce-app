import { Button, Box, styled, Typography, Badge } from "@mui/material";
import { React, useState, useContext } from "react";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Loginbutton = styled(Button)({
  color: "#2874f0",
  background: "#ffffff",
  textTransform: "none",
  fontWeight: "600",
  boxShadow: "none",
  borderRadius: "2px",
  padding: "5px 40px",
  height: "32px",
});

const CustomButton = () => {
  const [open, setopen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);

  const openDialog = () => {
    setopen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Loginbutton onClick={() => openDialog()} variant="contained">
          Login
        </Loginbutton>
      )}

      <Typography style={{ width: 135, marginTop: 3 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>

      <LoginDialog open={open} setopen={setopen} />
    </Wrapper>
  );
};

export default CustomButton;
