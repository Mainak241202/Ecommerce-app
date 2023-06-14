import React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";

const StyledHeader = styled(AppBar)({
  background: "#2874f0",
  height: "55px",
});

const Component = styled(Box)({
  marginLeft: "12%",
  lineHeight: 0,
});

const Subheading = styled(Typography)({
  fontSize: "10px",
  fontStyle: "italic",
});

const PlusImage = styled("img")({
  width: "13%",
  height: "10px",
  marginLeft: "2px",
});

const CustomButtonStyle = styled(Box)({
  marginLeft: "35px",
});

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore&nbsp;
              <Box component="span" style={{ color: "yellow" }}>
                Plus
              </Box>
            </Subheading>
            <PlusImage src={subURL} alt="sublogo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonStyle>
          <CustomButton />
        </CustomButtonStyle>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
