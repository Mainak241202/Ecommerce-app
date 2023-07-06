import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./../../redux/actions/productActions";

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

const ListWrap = styled(List)({
  position: "absolute",
  color: "#000",
  background: "#ffffff",
  marginTop: "36px",
});

const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);

  const getText = () => {
    setText(text);
  };

  return (
    <SearchContainer style={{ display: "flex" }}>
      <InputSearch
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
      />
      <SearchIconWrap>
        <SearchIcon />
      </SearchIconWrap>
      {text && (
        <ListWrap>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>{product.title.longTitle}</ListItem>
            ))}
        </ListWrap>
      )}
    </SearchContainer>
  );
};

export default Search;
