import React, { useState } from "react";
import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { authenticateSignup } from "./../../service/api";

const Component = styled(Box)({
  height: "100vh",
  width: "110vh",
});

const Image = styled(Box)({
  background:
    "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%",
  height: "82%",
  width: "40%",
  padding: "45px 35px",
  "& > p,& > h5": {
    color: "#ffffff",
  },
});

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "25px 35px",
  flex: "1",
  "& > div,& > p,& > button": {
    marginTop: "17px",
  },
});

const LoginButton = styled(Button)({
  textTransform: "none",
  background: "#FB641B",
  color: "#fff",
  height: "48px",
  borderRadius: "2px",
});

const RequestButton = styled(Button)({
  textTransform: "none",
  background: "#fff",
  color: "#2B74f0",
  height: "48px",
  borderRadius: "2px",
  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
});

const Text = styled(Typography)({
  color: "#878787",
  fontSize: "12px",
});

const CreateAccount = styled(Typography)({
  fontSize: "14px",
  color: "#2874f0",
  fontWeight: "600",
  cursor: "pointer",
  textAlign: "center",
});

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const LoginDialog = ({ open, setopen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);

  const handleClose = () => {
    setopen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography>{account.subHeading}</Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Email/Mobile Number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestButton>Request OTP</RequestButton>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
