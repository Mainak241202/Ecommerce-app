import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";
import { PowerSettingsNew } from "@mui/icons-material";

const Component = styled(Menu)({
  marginTop: "5px",
});

const Logout = styled(Typography)({
  fontSize: "14px",
  marginLeft: "20px",
});

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
