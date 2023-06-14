import { InputBase, Box, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)({
  background: "#fff",
  width: "36%",
  borderRadius: "2px",
  marginLeft: "10px",
});

const InputSearch = styled(InputBase)({
  paddingLeft: "20px",
  width: "100%",
});

const SearchIconWrap = styled(SearchIcon)({
  color: "blue",
  padding: "6px",
  display: "flex",
});

const Search = () => {
  return (
    <SearchContainer style={{ display: "flex" }}>
      <InputSearch placeholder="Search for products, brands and more" />
      <SearchIconWrap>
        <SearchIcon />
      </SearchIconWrap>
    </SearchContainer>
  );
};

export default Search;
